let fs = require('fs');
const addData = (data)=>{
    try {
        let jsonData=JSON.parse(fs.readFileSync('./json/cdw_ace23_buddies.json', 'utf-8'));
        jsonData.push(data);
        fs.writeFileSync('./json/cdw_ace23_buddies.json', JSON.stringify(jsonData));
        return {status:true};
    } catch (err) {
        return {status:false,error:err};
    }
    
}
module.exports={addData};