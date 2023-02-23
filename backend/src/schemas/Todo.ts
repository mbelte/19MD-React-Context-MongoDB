import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: () => Date.now(),
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('Todo', todoSchema)