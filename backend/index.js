var cookieParser = require('cookie-parser');
var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var qrRoute = require("./routes/qrRoute");
var app = express();
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// const apiErrorHandler = require("./middlewares/apiErrorHandler")
app.use("/user", qrRoute);
// app.use(apiErrorHandler);
app.listen(3001, function (error) {
    if (error) {
        console.log('error occurred');
    }
    else {
        console.log("running at port 3001");
    }
});
