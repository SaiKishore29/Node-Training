let fs = require('fs');
let randomNumber=require('random-number');
let colorCodeFile = "./json/color_ palette.json";
let colorCodes = fs.readFileSync(colorCodeFile, 'UTF-8');

const color = JSON.parse(colorCodes);

let option={
    min : 0,
    max : color.length,
    integer: true
}
let randomColor=[];
for(let i=0;i<5;i++){
    const a = randomNumber(option);
    randomColor[i]=color[a];
}
fs.writeFileSync("./json/randomized_color_ palette.json", JSON.stringify(randomColor), (err, file)=> {
        if(err) return err;
    
});
let randomColorCodes = JSON.parse(fs.readFileSync("./json/randomized_color_ palette.json"));
console.log(randomColorCodes);
