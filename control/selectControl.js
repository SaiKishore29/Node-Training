let fs = require('fs')
const selectEmployee=(req,res)=>{
    try {
        let buddy_list = JSON.parse(fs.readFileSync('./json/cdw_ace23_buddies.json', 'utf-8'))
        let employee = buddy_list.filter(emp => {
            return emp.employeeId == req.params.key || emp.realName == req.params.key
        })
        res.json(employee)
    } catch (error) {
        res.send("Check the File Name");
    }
};
module.exports=selectEmployee;