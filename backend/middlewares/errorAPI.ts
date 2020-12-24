class ErrorAPI{
    code: number;
    message: string;
    constructor(code: number, message: string)  {
        this.code = code;
        this.message = message;
    }

    static BadRequest(msg: string){
        return new ErrorAPI(400, msg);
    }
    
    static Internal(msg: string){
        return new ErrorAPI(500, msg);
    }

    static NotFound(msg: string){
        return new ErrorAPI(404, msg);
    }

}

export {
    ErrorAPI
};