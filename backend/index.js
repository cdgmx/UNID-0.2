const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const qrRoute = require("./routes/qrRoute")


const app = express();
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// const apiErrorHandler = require("./middlewares/apiErrorHandler")

app.use("/user", qrRoute);


// app.use(apiErrorHandler);

app.listen(3001, (error) => {
    if(error){
        console.log('error occurred')
    } else{
        console.log("running at port 3001");
    }
});


