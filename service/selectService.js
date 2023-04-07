let fs = require('fs');
const selectData= (key)=>{
    try {
        let jsonData=JSON.parse(fs.readFileSync('./json/cdw_ace23_buddies.json', 'utf-8'));
         let employee = jsonData.filter(emp => {
            return emp.employeeId == key || emp.realName == key
        })
        return {status:true, data: employee};
    } catch (err) {
        return {status: false,error:err};
    }
    
}
module.exports={selectData};