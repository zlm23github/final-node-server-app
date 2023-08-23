import express from "express";
import cors from 'cors';
import "dotenv/config";
import session from "express-session";
import UserController from "./controller/users-controller.js";
import AuthController from "./controller/auth-controller.js";
import mongoose from "mongoose";
import CargoController from "./controller/cargo-controller.js";
import moodController from "./controller/mood-controller.js";
import MoodController from "./controller/mood-controller.js";

mongoose.connect( process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/final");


const app = express()
app.use(cors(
    {
        credentials: true,
        origin: 'http://localhost:3000'
        // 'http://localhost:3000'
        // process.env.FRONTEND_URL
    }
));

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "production") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));

app.use(express.json());
MoodController(app);
UserController(app);
AuthController(app);
CargoController(app);
app.listen(process.env.PORT || 8080)
