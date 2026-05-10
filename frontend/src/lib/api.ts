const API_URL = "http://127.0.0.1:8000";


// SEND MESSAGE
export async function sendMessage(data: {
  message: string;
  chat_id?: string;
}) {
  const response = await fetch(
    `${API_URL}/chat`,
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to send message"
    );
  }

  return response.json();
}


// GET ALL CHATS
export async function getChats() {
  const response = await fetch(
    `${API_URL}/chats`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch chats"
    );
  }

  return response.json();
}


// GET SINGLE CHAT
export async function getSingleChat(
  chatId: string
) {
  const response = await fetch(
    `${API_URL}/chat/${chatId}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch chat"
    );
  }

  return response.json();
}

export async function deleteChat(
  chatId: string
) {

  const res = await fetch(
    `http://127.0.0.1:8000/chat/${chatId}`,
    {
      method: "DELETE",
    }
  );

  return await res.json();
}

export async function renameChat(
  chatId: string,
  title: string
) {

  const res = await fetch(
    `http://127.0.0.1:8000/chat/${chatId}`,
    {
      method: "PUT",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        title,
      }),
    }
  );

  return await res.json();
}