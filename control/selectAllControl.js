let fs = require('fs');
const selectAllEmployee=(req,res)=>{
    try {
        res.send(fs.readFileSync('./json/cdw_ace23_buddies.json', 'utf-8'))
    } catch (error) {
        res.send("Check the File Name");
    }  
};
module.exports=selectAllEmployee;