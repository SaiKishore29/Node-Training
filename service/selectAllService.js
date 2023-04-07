let fs = require('fs');
const selectAllData= ()=>{
    try {
        let jsonData=JSON.parse(fs.readFileSync('./json/cdw_ace23_buddies.json', 'utf-8'));
        return {status:true, data: jsonData};
    } catch (err) {
        return {status: false, error:err};
    }
    
}
module.exports={selectAllData};