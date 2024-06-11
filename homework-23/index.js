const express = require("express");
const TodosModel = require("./mongo/todo.model");
const mongoose = require("mongoose");
const cors = require("cors");
const todoModel = require("./mongo/todo.model");
const { response } = require("express");
const app = express();

let todos = [
  {
    id: 1,
    text: "I am here",
    checked: false,
  },
];

mongoose
  .connect(
    "mongodb+srv://kirillsyslov5589:SnVeAAgsEj3Ywi2J@cluster0.vzwqmn4.mongodb.net/tododb?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("Server is running on http://localhost:5000");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("its Me server");
});

app.get("/todos", (req, res) => {
  TodosModel.find().then((response) => res.send(response));
});

app.post("/todos", (req, res) => {
  console.log(req.body);
  const todo = new TodosModel(req.body);
  todo.save().then((response) => res.send(response));
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  TodosModel.deleteOne({ _id: id }).then((response) => {
    if (response.deletedCount === 0) {
      res.status(404).send({ massage: "Error!" });
    } else {
      res.status(200).send({ massage: "Success" });
    }
  });
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  TodosModel.updateOne({ _id: id }, req.body)
    .then(() => TodosModel.findById(id))
    .then((response) =>
      res.status(200).send({ massage: "Success", data: response })
    );
});
