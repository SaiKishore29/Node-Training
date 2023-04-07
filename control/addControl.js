let logger=require('../logger/logger');
let addService=require('../service/addService');
const addEmployee=(req,res)=>{
        let data=addService.addData(req.body);
        if(data.status){
                res.status(200).send("employee added");
        }else{
                let error=data.error;
                logger.error(`${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
                res.status(404).send("File not found");
        }
        
};
module.exports=addEmployee
