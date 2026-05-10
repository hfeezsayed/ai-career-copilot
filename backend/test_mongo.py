from pymongo import MongoClient
import certifi

MONGO_URL = "PASTE_YOUR_MONGO_URL"

client = MongoClient(
    MONGO_URL,
    tls=True,
    tlsCAFile=certifi.where()
)

try:
    client.admin.command("ping")
    print("MongoDB Connected Successfully 🚀")
except Exception as e:
    print(e)