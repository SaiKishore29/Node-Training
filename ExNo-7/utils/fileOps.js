const pkg=require('fs-extra');
const { readJSONSync, writeJSONSync } = pkg;

function readFile(fileName) {
  return readJSONSync("data/" + fileName);
}

function writeFile(fileName, data) {
  return writeJSONSync("data/" + fileName, data);
}
module.exports={ readFile,writeFile}
