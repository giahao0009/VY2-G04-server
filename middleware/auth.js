const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  try {
    const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log(decode);
    req.userId = decode.userId;
    next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
};

module.exports = verifyToken;
