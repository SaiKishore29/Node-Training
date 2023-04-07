let logger=require('../logger/logger');
let selectAll=require('../service/selectAllService');
const selectAllEmployee=(req,res)=>{
    let employeeData=selectAll.selectAllData();
    if(employeeData.status){
        res.status(200).send(employeeData.data);
    }else{
        let error=employeeData.error;
        logger.error(`${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        res.status(404).send("File not Found");
    }
    
};
module.exports=selectAllEmployee;