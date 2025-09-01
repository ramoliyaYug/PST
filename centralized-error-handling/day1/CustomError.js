class ApiError extends Error {
    constructor(errMessage,errStatusCode) {
        super(errMessage);
        this.errStatusCode = errStatusCode
        this.message = errMessage
    }
}


module.exports = {ApiError}