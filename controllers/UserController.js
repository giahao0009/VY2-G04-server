const { sequelize, User } = require("../models");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

class UserController {
  // [GET] /api/user/getuserinfo/:id
  getUserInfo = async (req, res) => {
    const id = req.userId;
    try {
      const user = await User.findOne({ where: { userId: id } });
      const data = {
        name: user.dataValues.name,
        email: user.dataValues.email,
      };
      res.json({ status: 201, message: "Thực hiện thành công", data: data });
    } catch (e) {
      console.log(e);
      res.json({ status: 500, message: "Server hiện tại đang bị lỗi" });
    }
  };

  // [POST] /api/auth/register
  register = async (req, res) => {
    const { email, password, name } = req.body;

    //Simple validation
    if (!email || !password) {
      return res.json({ status: 401, message: "Không có email hoặc password" });
    }
    try {
      //Check for extended user
      const user = await User.findOne({ where: { email } });
      if (user) {
        return res.json({ status: 401, message: "Email đã tồn tại" });
      }

      // All good
      const hashedPassword = await argon2.hash(password);
      const newUser = await User.create({
        email: email,
        password: hashedPassword,
        name: name,
      });
      console.log(newUser);
      // // Return token
      const accessToken = jwt.sign(
        { userId: newUser.dataValues.userId },
        process.env.ACCESS_TOKEN_SECRET
      );

      res.json({
        status: 201,
        message: "Đăng ký thành công",
        name: newUser.dataValues.name,
        email: newUser.dataValues.password,
        accessToken: accessToken,
      });
    } catch (e) {
      console.log(e);
      res.json({ status: 500, message: "Server hiện tại đang bị lỗi" });
    }
  };

  // [POST] /api/auth/login
  login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ status: 401, message: "Không có email hoặc password" });
    }
    try {
      // Check for existing user
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.json({
          status: 401,
          message: "Email hoặc password nhập sai",
        });
      }
      const passwordValid = await argon2.verify(user.password, password);
      if (!passwordValid) {
        return res.json({
          status: 401,
          message: "Email hoặc password nhập sai",
        });
      }

      // ALL good
      // Return token
      const accessToken = jwt.sign(
        { userId: user.dataValues.userId },
        process.env.ACCESS_TOKEN_SECRET
      );

      res.json({
        status: 201,
        message: "Đăng nhập thành công",
        email: user.dataValues.email,
        name: user.dataValues.name,
        accessToken: accessToken,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

module.exports = new UserController();
