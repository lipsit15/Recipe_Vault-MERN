import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();
app.use(express.json()); // to get data from front-end which it will convert to json
app.use(cors());
app.use("/auth", userRouter);
app.use("/recipes",recipesRouter)
mongoose.connect("mongodb+srv://Lipsit15:MERNpassword@recipes.f4cayzb.mongodb.net/recipes?retryWrites=true&w=majority")
app.listen(3001, () => console.log("Server started!!"));