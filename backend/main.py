from fastapi import FastAPI
from flask import Flask
from flask_cors import CORS
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import joblib
preprocessor = joblib.load('preprocessor.pkl')
loaded_model = joblib.load('model.pkl')


app = FastAPI()
origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/data")
def read_data():
    df = pd.read_csv('da.csv')
    new_data_transformed = preprocessor.transform(df)
    new_predictions = loaded_model.predict(new_data_transformed)
    top_selling_indices = new_predictions.argsort()[-10:][::-1]
    top_selling_stockcodes = df.loc[top_selling_indices, 'StockCode']
    top_selling_quantities = new_predictions[top_selling_indices]
    top_selling_items = []
    for stockcode, quantity in zip(top_selling_stockcodes, top_selling_quantities):
        item = {'StockCode': stockcode, 'PredictedQuantity': float(quantity)}
        top_selling_items.append(item)


    return top_selling_items


