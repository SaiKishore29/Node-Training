let logger=require('../logger/logger');
let updateService=require('../service/updateService');
const updateEmployee=(req,res)=>{
    let data=updateService.updateData(req.body);
    if(data.status){
        res.status(200).send("employee updated");
    }else{
        let error=data.error;
        logger.error(`${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        res.status(404).send("File not Found");
    }
        
   
    
};
module.exports=updateEmployee;