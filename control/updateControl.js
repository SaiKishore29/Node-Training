let fs = require('fs')
const updateEmployee=(req,res)=>{
    let update=req.body;
    let employeeId = update.employeeId;
    let updatedRealName = update.realName;
    let updatedNickName = update.nickName;
    let updatedDOB= update.dob;
    let updatedHobby = update.hobbies;
    try {
        let buddy_list = JSON.parse(fs.readFileSync('./json/cdw_ace23_buddies.json', 'utf-8'))
        let employeeIdx = buddy_list.findIndex(emp => emp.employeeId == employeeId)
        console.log(employeeIdx);
    
        if (updatedRealName) { buddy_list[employeeIdx].realName = updatedRealName; }
    
        if (updatedNickName) { buddy_list[employeeIdx].nickName = updatedNickName; }
        
        if (updatedDOB) { buddy_list[employeeIdx].dob = updatedDOB; }
    
        if (updatedHobby) { buddy_list[employeeIdx].hobbies = updatedHobby; }
    
        fs.writeFileSync('./json/cdw_ace23_buddies.json', JSON.stringify(buddy_list));
        res.send("employee updated");
    } catch (error) {
        res.send("Check the File Name");
    }
   
    
};
module.exports=updateEmployee;