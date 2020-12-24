const ApiError = require('./errorAPI')

function apiErrorHandler(err, req, res, next){
    if (err instanceof ApiError) {
        console.log("pass here if error")
        res.status(err.code).json(err.message);
      
        return;
    }

    console.log("err obj")
 

}

export default apiErrorHandler;