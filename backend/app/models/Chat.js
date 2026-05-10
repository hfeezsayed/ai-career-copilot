import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  role: String,
  content: String,
});

const chatSchema = new mongoose.Schema(
  {
    title: String,

    messages: [messageSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Chat ||
  mongoose.model("Chat", chatSchema);