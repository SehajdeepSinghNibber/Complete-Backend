import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import todoModel from "../src/models/todo.model.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.post("/todos", async (req, res) => {
  try {
    const { text } = req.body;

    const todo = await todoModel.create({
      text,
      completed: false
    });

    res.status(201).json({
      message: "Todo created successfully",
      todo
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await todoModel.find();

    res.status(200).json({
      message: "Todos fetched successfully",
      todos
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const { text, completed } = req.body;

    const updatedTodo = await todoModel.findByIdAndUpdate(
      req.params.id,
      { text, completed },
      { new: true }
    );

    res.status(200).json({
      message: "Todo updated successfully",
      updatedTodo
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    await todoModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Todo deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default app;