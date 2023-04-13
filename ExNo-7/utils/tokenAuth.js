const jwt=require('jsonwebtoken');

module.exports=function authenticateToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    req.user = payload;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
    console.log(error);
  }
}
