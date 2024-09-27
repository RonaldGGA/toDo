import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const ToDo = mongoose.models?.ToDo || mongoose.model("ToDo", toDoSchema);
