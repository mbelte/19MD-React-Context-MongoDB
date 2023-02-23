import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import Todo from "./schemas/Todo";
import { TodoBodyType, TodoIsDoneRequestType } from "./types/Todo";

mongoose.connect("mongodb://localhost:27017/todo");

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});


app.post("/todo", (req: Request<any, any, TodoBodyType>, res: Response) => {
  const { content, title } = req.body;
  Todo.create({
    title,
    content,
  });
  res.json({"status": "success"});
});

app.get("/todo", (req: Request, res: Response) => {
  Todo.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({"status": "error", "message":error}));
});

app.patch("/todo-update-status", (req: Request<any, any, TodoIsDoneRequestType>, res: Response) => {
  const { id, isDone } = req.body;
  Todo.updateOne({ _id: id }, { $set: { isDone } })
    .then(() => res.json({"status": "success"}))
    .catch((error) => res.json({"status": "error", "message":error}));
});

app.delete("/todo/:id", (req: Request, res: Response) => {
    const id = req.params.id

    Todo.deleteOne({ _id: id })
      .then(() => res.json('{"status": "success"}'))
      .catch((error) => res.json({"status": "error", "message":error}));
  }
);





app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
