class ErrorAPI{
    constructor(code, message)  {
        this.code = code;
        this.message = message;
    }

    static BadRequest(msg){
        return new ErrorAPI(400, msg);
    }
    
    static Internal(msg){
        return new ErrorAPI(500, msg);
    }

    static NotFound(msg){
        return new ErrorAPI(404, msg);
    }

}

module.exports = ErrorAPI;