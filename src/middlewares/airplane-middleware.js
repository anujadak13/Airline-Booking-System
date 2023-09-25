const {statusCode}= require('http-status-codes');

const {ErrorResponse}= require('../utils/common');

function ValidateCreateResponse(req, res, next){
    if(!req.body.modelNumber){
        ErrorResponse.message=`Somthing went wrong while creating airplane`;
        ErrorResponse.error=new AppError(['Model Number not found in the oncoming request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                 .status(statusCode.BAD_REQUEST)
                 .json(ErrorResponse);
    }
    next();
}

module.exports={
    ValidateCreateResponse   
}