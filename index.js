import express from "express";
import dotenv from "dotenv";
import "./database/init.js";
import cors from "cors";
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
dotenv.config();
app.use(
  cors({
    origin: "*",
  })
);

app.use("*", (req, res) => {
  return res.status(404).json({
    statusCode: 404,
    message: `Route not found`,
    status: "fail",
    data: null,
  });
});

app.use((error, req, res, next) => {
  return res.status(error.status || 500).json({
    statusCode: 500,
    message: `${error.message}`,
    status: "fail",
    data: null,
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is started and started at ${PORT}`);
});
