import cookieParser from 'cookie-parser';
import express from 'express';
import cors from'cors';
import morgan from'morgan';
import {router} from "../routes/qrRoute";


const app = express();
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// const apiErrorHandler = require("./middlewares/apiErrorHandler")

app.use("/user", router);


// app.use(apiErrorHandler);

app.listen(3001, () => {
    console.log("running at port 3001");
});


