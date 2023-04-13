
const fileOps=require('../utils/fileOps');
const bcrypt=require('bcryptjs');
const tokenGen=require('../utils/tokenGeneration');

async function registerUser(details) {
  const users = fileOps.readFile("userData/users.json");
  const isPresent = users.some((user) => user.userName == details.userName);
  if (isPresent) {
    throw new Error("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  details.password = await bcrypt.hash(details.password, salt);
  users.push(details);
  fileOps.writeFile("userData/users.json", users);

  const payload = { name: details.userName };
  const token = tokenGen(payload);
  return token;
}

function loginUser(details) {
  const users = fileOps.readFile("userData/users.json");
  const userIdx = users.findIndex((user) => user.userName == details.userName);
  if (userIdx == -1) {
    throw new Error("Invalid username or Password");
  }
  const match = bcrypt.compareSync(details.password, users[userIdx].password);
  if (!match) {
    throw new Error("Invalid username or Password");
  }
  const payload = { name: details.userName };
  const token = tokenGen(payload);
  return token;
}

module.exports={registerUser, loginUser}