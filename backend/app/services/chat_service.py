from bson import ObjectId

from app.utils.mongodb import chat_collection


# Create New Chat
async def create_chat(title: str):

    result = chat_collection.insert_one({
        "title": title,
        "messages": [],
    })

    return str(result.inserted_id)


# Add Message
async def add_message(
    chat_id: str,
    role: str,
    content: str,
):

    chat_collection.update_one(
        {
            "_id": ObjectId(chat_id)
        },
        {
            "$push": {
                "messages": {
                    "role": role,
                    "content": content,
                }
            }
        }
    )

# Delete Chat
async def delete_chat(chat_id: str):

    chat_collection.delete_one({
        "_id": ObjectId(chat_id)
    })

    return {
        "message": "Chat deleted"
    }

# Rename Chat
async def rename_chat_service(
    chat_id: str,
    title: str
):

    chat_collection.update_one(
        {
            "_id": ObjectId(chat_id)
        },
        {
            "$set": {
                "title": title
            }
        }
    )

    return {
        "message": "Chat renamed"
    }


# Get All Chats
async def get_all_chats():

    chats = chat_collection.find()

    result = []

    for chat in chats:

        result.append({
            "id": str(chat["_id"]),
            "title": chat["title"]
        })

    return result


# Get Single Chat
async def get_chat(chat_id: str):

    chat = chat_collection.find_one({
        "_id": ObjectId(chat_id)
    })

    if not chat:
        return None

    return {
        "id": str(chat["_id"]),
        "title": chat["title"],
        "messages": chat["messages"]
    }