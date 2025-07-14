import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import bodyParser from 'body-parser';
import {dbConnection, dbDisconnect} from './src/utils/dbConfig.js';
import AppError from './src/utils/error.js';
import globalErrorHandler from './src/middlewares/globalErrorHandler.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.send("Welcome to the Paytm Backend");
})

app.all("*", (req, res) => {
    next(new AppError("This route does not exist", 404));
})

app.use(globalErrorHandler);

app.listen(process.env.PORT || 3000, () => {
    dbConnection();
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
})