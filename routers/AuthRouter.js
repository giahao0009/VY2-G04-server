const express = require("express");
const router = express.Router();
const { UserController } = require("../controllers");
const verifyToken = require("../middleware/auth");

router.get("/getuserinfo", verifyToken, UserController.getUserInfo);
router.post("/register", UserController.register);
router.post("/login", UserController.login);

module.exports = router;
