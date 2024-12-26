import express from "express";
import { connectToDB } from "./db";
import { routes } from "./routes";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
routes.map((route) => app[route.method](route.path, route.handler));

app.get("/ping", (req, res) => {
  console.log("Received a ping request");
  res.send("Pong back at you :D");
});

connectToDB().then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`MERN Server is running on port ${PORT}`);
  });
});
