import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import {dbConnection, dbDisconnect} from './src/utils/dbConfig.js';
import AppError from './src/utils/error.js';
import globalErrorHandler from './src/middlewares/globalErrorHandler.js';
import userRouter from './src/routes/user.route.js';
import accountRouter from './src/routes/account.route.js';
import { corsOptions } from './src/utils/corsConfig.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors(corsOptions));

app.get("/", (req, res)=>{
    res.send("Welcome to the Paytm Backend");
})

app.use("/api/v1/", userRouter)
app.use("/api/v1/", accountRouter)

app.all("*", (req, res) => {
    return res.status(404).json({
        status: "fail",
        message: `Route does not exist`,
    });
})

app.use(globalErrorHandler);

app.listen(process.env.PORT || 3000, () => {
    dbConnection();
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
})