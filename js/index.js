
let fs = require('fs');

let colorCodeFile = "./json/color_ palette.json";
let colorCodes = fs.readFileSync(colorCodeFile, 'UTF-8');

const color = JSON.parse(colorCodes);
const min = 0;
const max = color.length;
let randomColor=[];
for(let i=0;i<5;i++){
    const a = Math.floor(Math.random() * (max - min + 1)) + min;
    randomColor[i]=color[a];
}
fs.writeFileSync("./json/randomized_color_ palette.json", JSON.stringify(randomColor), (err, file)=> {
        if(err) return err;
    
});

let randomColorCodes = JSON.parse(fs.readFileSync("./json/randomized_color_ palette.json"));
console.log(randomColorCodes);
