import {ErrorAPI} from './errorAPI';
import{Request, Response} from 'express'


function errorHandler(err: any, req: Request, res: Response, next: any){
    if (err instanceof ErrorAPI ) {
        console.log("pass here if error")
        res.status(err.code).json(err.message);
      
        return;
    }

    // res.send("data")
    console.log("err obj")
   
    // console.log(err)

}


export default{
    errorHandler
}