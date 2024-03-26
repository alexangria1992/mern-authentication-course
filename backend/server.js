import express from "express";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => res.send("Server is ready"));

app.listen(port, () =>
  console.log(colors.cyan(`Server started on port ${port}`))
);
