const express = require("express");
const mongoose = require("mongoose");

const port = 5000;
const databaseName = "productDb";

const app = express();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function connectMongoDb() {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`);
    console.log("database connection successful");
  } catch (error) {
    console.log("failed to connect db");
  }
}

connectMongoDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send({
    name: "Topu",
    age: 42,
  });
});
