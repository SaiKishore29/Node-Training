let logger=require('../logger/logger');
let select=require('../service/selectService');
const selectEmployee=(req,res)=>{
        let employeeData=select.selectData(req.params.key);
        if(employeeData.status){
            res.status(200).json(employeeData.data);
        }else{
            let error=employeeData.error;
            logger.error(`${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
            res.status(404).send("File Not Found");
        }
};
module.exports=selectEmployee;