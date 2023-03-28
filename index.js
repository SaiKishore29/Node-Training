let http=require('http');
let fs = require('fs');
// Creating server
http.createServer((req,res,err)=>{
    if(err) return err;
    if(req.url!='fevicon.ico'){ //check what is fevicon
        // json file path
        let colorCodeFile = "./json/color_ palette.json";
        // reading json file
        let colorCodes = fs.readFileSync(colorCodeFile, 'UTF-8');
        const color = JSON.parse(colorCodes);
        const min = 0;
        const max = color.length;
        let randomColor=[];
        // looping to get 5 random numbers
        for(let i=0;i<5;i++){
            // Generating Random number
            const a = Math.floor(Math.random() * (max - min + 1)) + min; //repetitive numbers
            // adding random color to an array
            randomColor[i]=color[a];
        }
        // writing random 5 color array to browser
        res.write(JSON.stringify(randomColor)); //try without stringify
        res.end();
    }
    // port:4000
}).listen(4000);