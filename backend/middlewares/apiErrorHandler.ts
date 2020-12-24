const ApiError = require('./errorAPI')

function apiErrorHandler(err: { code: any; message: any; }, req: any, res: { status: (arg0: any) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; }, next: any){
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