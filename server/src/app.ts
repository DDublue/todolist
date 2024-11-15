import {config} from "dotenv";
import express from "express";
import cors from "cors";
import todoRouter from "./todo/todoRoutes";
import {connectDb} from "./config/db";
import { errorHandler } from "./middleware/errorMiddleware";

config({path:"../.env"});
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api", todoRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const startServer = async () => {
  await connectDb();
  app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
  });
}

startServer();
