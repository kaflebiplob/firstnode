// const express = require("express");

import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "one joke",
      content: "this is funny joke",
    },
    {
        id: 2,
        title: "second joke",
        content: "this is funny joke",
      },
      {
        id: 3,
        title: "third joke",
        content: "this is funny joke",
      },
      {
        id: 4,
        title: "fourth joke",
        content: "this is funny joke",
      },
      {
        id: 5,
        title: "five joke",
        content: "this is funny joke",
      }
  ];
  res.send(jokes); 
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
