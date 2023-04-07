let express = require('express');
let fs = require('fs')
let app = express()

require('dotenv').config()
let addRoute=require('./route/addRoute');
let deleteRoute=require('./route/deleteRoute');
let selectRoute=require('./route/selectRoute');
let updateRoute=require('./route/updateRoute');
const port = process.env.port;

app.use(express.json());

app.use('/employees', selectRoute);

app.use('/add_employee', addRoute);

app.use('/update_employee', updateRoute);

app.use('/delete_employee', deleteRoute);

app.use('/', (req, res) => {
    res.send("home")
})

app.listen(port, () => {
    console.log("Server started listening in port " + port)
    // cdwAce23Budies=[]
    // fs.writeFileSync('./json/cdw_ace23_buddies.json',JSON.stringify(cdwAce23Budies))
})