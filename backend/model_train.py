def model_train_fun():
    import pandas as pd
    from sklearn.model_selection import train_test_split
    from sklearn.preprocessing import OneHotEncoder
    from sklearn.compose import ColumnTransformer
    from xgboost import XGBRegressor
    from sklearn.metrics import r2_score, mean_absolute_error
    import numpy as np

    df = pd.read_csv('data.csv').drop(['Unnamed: 0'], axis=1)
    df['InvoiceDate'] = pd.to_datetime(df['InvoiceDate'])
    X = df.drop(['Quantity', 'InvoiceDate','Week','Weekday','Day'], axis=1)  # Features
    y = df['Quantity'] 
    categorical_cols = ['StockCode']
    preprocessor = ColumnTransformer(
        transformers=[('cat', OneHotEncoder(handle_unknown='ignore'), categorical_cols)],
        remainder='passthrough'
    )
    X_transformed = preprocessor.fit_transform(X)
    X_train, X_test, y_train, y_test = train_test_split(X_transformed, y, test_size=0.2, random_state=42)
    model = XGBRegressor(n_estimators=1000, learning_rate=0.1, random_state=42)
    model.fit(X_train, y_train, early_stopping_rounds=10, eval_set=[(X_test, y_test)], verbose=False)
    y_pred = model.predict(X_test)
    r2 = r2_score(y_test, y_pred)
    mape = np.mean(np.abs((y_pred - y_test) / y_test)) * 100
    accuracy = max(0, min(100, 100 * (1 - mape / 100)))
    top_selling_indices = y_pred.argsort()[-10:][::-1]
    top_selling_stockcodes = X.loc[top_selling_indices, 'StockCode']
    top_selling_quantities = y_pred[top_selling_indices]
    print(f'R^2 Score: {r2:.2f}')
    print(f'Mean Absolute Percentage Error (MAPE): {mape:.2f}%')
    print(f'Accuracy: {accuracy:.2f}%')
    print("\nTop Selling Items and Predicted Quantities:")
    for stockcode, quantity in zip(top_selling_stockcodes, top_selling_quantities):
        print(f"StockCode: {stockcode}, Predicted Quantity: {quantity:.2f}")

    return preprocessor

model_train_fun()