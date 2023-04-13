
const authUserService=require('../services/authUserService')
const logger=require('../utils/logger');



async function register(req, res) {
  let userData = req.body;
  try {
    const data = await authUserService.registerUser(userData);
    res.status(201).send({
      message: `${req.body.userName} registered successfully`,
      token: data,
    });
  } catch (error) {
    if (error.message == "User already exists") {
      res.status(400).send({ message: error.message });
    } else {
      logger.error(`${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
      res.status(500).send({ message: "Internal server Error" });
    }
  }
}

function login(req, res) {
  try {
    const userData = req.body;
      const data = authUserService.loginUser(userData);
      res.status(201).send({
        message: `${req.body.userName} Logged in`,
        token: data,
      });
    // }
  } catch (error) {
    if (error.message == "Invalid username or Password") {
      res.status(404).send({ message: error.message });
    } else {
      logger.error(`${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
      res.status(500).send({ message: "Internal server Error" });
    }
  }
}
module.exports={ register, login}