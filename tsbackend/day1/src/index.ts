import express from "express";
import type {Request,Response} from "express"
import { dbConnect } from "./config/db";
import userRouter from "./routes/user.routes";
const app = express();

dbConnect();

app.use(express.json());

app.get("/", (req:Request, res:Response) => {
    res.json({ message: "Welcome to the Express TypeScript Server" });
});

app.use("/api", userRouter);

app.get("/health", (req:Request, res:Response) => {
    console.log("Server is up and running");
    res.json({ message: "Server is up and running" });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});