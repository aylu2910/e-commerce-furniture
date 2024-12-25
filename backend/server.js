import express from "express";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
  console.log("Received a ping request");
  res.send("Pong back at you :D");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
