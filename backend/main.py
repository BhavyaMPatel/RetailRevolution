from fastapi import FastAPI

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.metrics import r2_score, mean_absolute_error
import numpy as np
from xgboost import XGBRegressor
import joblib
preprocessor = joblib.load('preprocessor.pkl')
loaded_model = joblib.load('model.pkl')


app = FastAPI()


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
    print("\nTop Selling Items and Predicted Quantities:")
    for stockcode, quantity in zip(top_selling_stockcodes, top_selling_quantities):
        print(f"StockCode: {stockcode}, Predicted Quantity: {quantity:.2f}")

    return {"Hello": "Python"}

