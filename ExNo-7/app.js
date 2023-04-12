
const express=require("express");
const cors=require("cors");
require('dotenv').config()
const userRoute=require('./routes/userRoutes');
const taskRoute=require('./routes/taskRoutes');
const tokenAuth=require('./utils/tokenAuth');

const app = express();
const port = process.env.PORT;

app.use(cors({
  origin: ['http://localhost:4010','http://127.0.0.1:4010'],
}));
app.use(express.json());

app.use("/", userRoute);
app.use("/tasks", tokenAuth, taskRoute);

app.listen(port, () => {
  console.log("server listening in port " + port);
});

module.exports = app;
