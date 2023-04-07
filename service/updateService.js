let fs = require('fs');
const updateData = (data)=>{
    try {
        let jsonData=JSON.parse(fs.readFileSync('./json/cdw_ace23_buddies.json', 'utf-8'));
        let employeeIdx = jsonData.findIndex(emp => emp.employeeId == data.employeeId);
        if (data.realName) { jsonData[employeeIdx].realName = data.realName; }
    
        if (data.nickName) { jsonData[employeeIdx].nickName = data.nickName; }
        
        if (data.dob) { jsonData[employeeIdx].dob = data.dob; }
    
        if (data.hobbies) { jsonData[employeeIdx].hobbies = data.hobbies; }

        fs.writeFileSync('./json/cdw_ace23_buddies.json', JSON.stringify(jsonData));
        return {status:true};
    } catch (err) {
        return {status:false,error:err};
    }
    
}
module.exports={updateData};