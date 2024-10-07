from fastapi import FastAPI
import httpx
import os

app = FastAPI()

NIKKEI225_API_URL = "https://www.alphavantage.co/query"
API_KEY = os.getenv("API_KEY")

async def get_nikkei225_price():
    params = {
        "function": "TIME_SERIES_INTRADAY",
        "symbol": "^N225",
        "interval": "5min",
        "apikey": API_KEY,
    }
    async with httpx.AsyncClient() as client:
        response = await client.get(NIKKEI225_API_URL, params=params)
        response.raise_for_status()
        data = response.json()
        time_series = data.get("Time Series (5min)")
        if time_series:
            latest_time = list(time_series.keys())[0]
            latest_data = time_series[latest_time]
            return {"price": latest_data["1. open"], "timestamp": latest_time}
        return {"price": "No data", "timestamp": "No data"}

@app.get("/price")
async def get_price():
    return await get_nikkei225_price()
