import express from "express";
import type { Request, Response } from "express";

const userRouter = express.Router();

userRouter.get("/home", (req: Request, res: Response) => {
    res.json({ message: "Welcome to the User Home Page" });
});


userRouter.get("/user", (req: Request, res: Response) => {
    res.json({ message: "User Information" });
})
export default userRouter;