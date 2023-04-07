let fs = require('fs');

const addEmployee=(req,res)=>{
    try {
        let buddies_list = JSON.parse(fs.readFileSync('./json/cdw_ace23_buddies.json', 'utf-8'));
        buddies_list.push(req.body)
        fs.writeFile('./json/cdw_ace23_buddies.json', JSON.stringify(buddies_list), (err) => {
            if (err) {
                console.log(err)
            }
        })
        res.send("employee added");
    } catch (error) {
        res.send("Check the File Name");
    }
};
module.exports=addEmployee
