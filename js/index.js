
import { readFileSync, writeFileSync } from 'fs';
 // reading json file
let colorCodes = readFileSync("./json/color_ palette.json", 'UTF-8',);
    const color = JSON.parse(colorCodes);
    if(color.length !== 0){
        const min = 0;
        const max = color.length;
        let randomColor=new Set();
        let i=0;
        // looping 5 times
        while(i<5){
            // generate random number
            const a = Math.floor(Math.random() * (max - min + 1)) + min;
            if(!randomColor.has(color[a])&&(color[a]!=null)){
                // Adding random color to random color set
                randomColor.add(color[a]);
                i++;
            }
        }
        // writing random color set to JSON file
        writeFileSync("./json/randomized_color_ palette.json", JSON.stringify(Array.from(randomColor)), (err, file)=> {
                if(err) return err;
        });
        // reading JSON file
        let randomColorCodes = JSON.parse(readFileSync("./json/randomized_color_ palette.json"));
        console.log(randomColorCodes);
    }
    else{
        console.log("JSON is empty");
    }
    



