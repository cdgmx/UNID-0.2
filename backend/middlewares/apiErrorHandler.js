const ApiError = require('./errorAPI')

function apiErrorHandler(err, req, res, next){
    if (err instanceof ApiError) {
        console.log("pass here if error")
        res.status(err.code).json(err.message);
      
        return;
    }

    // res.send("data")
    console.log("err obj")
   
    // console.log(err)

}

module.exports = apiErrorHandler;