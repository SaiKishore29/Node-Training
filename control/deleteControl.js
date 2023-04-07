let deleteService=require('../service/deleteService');
let logger=require('../logger/logger');
const deleteEmployee=(req,res)=>{
    let data=deleteService.deleteData(req.params.key);
    if(data.status){
        res.status(200).send("employee deleted");
    }else{
        let error=data.error;
        logger.error(`${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        res.status(404).send("File Not Found");
    }
        
    
};
module.exports=deleteEmployee;