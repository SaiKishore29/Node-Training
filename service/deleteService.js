let fs = require('fs');
const deleteData = (data)=>{
    try {
        let jsonData=JSON.parse(fs.readFileSync('./json/cdw_ace23_buddies.json', 'utf-8'));

        let employeeIdx = jsonData.findIndex(emp => emp.employeeId == data)
        
        if (data) { jsonData.splice(employeeIdx, 1) }

        fs.writeFileSync('./json/cdw_ace23_buddies.json', JSON.stringify(jsonData));
        return {status:true};
    } catch (err) {
        return {status:false,error:err};
    }
    
}
module.exports={deleteData};