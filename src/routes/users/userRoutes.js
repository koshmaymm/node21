const express = require("express");
const {
  userRegisterCtrl,
  usersCtrl,
  userLoginCtrl,
  userProfileCtrl
} = require("../../controllers/users/userCtrl");
const isLogin = require("../../middlewares/isLogin");
// const isAdmin = require("../../middlewares/isAdmin");

const userRouter = express.Router();



//POST/api/v1/users/register
userRouter.post("/register", userRegisterCtrl);

//POST/api/v1/users/login
userRouter.post("/login", userLoginCtrl);

//GET/api/v1/users
userRouter.get("/", usersCtrl);

//GET/api/v1/users/profile/:id
userRouter.get("/profile", isLogin, userProfileCtrl);



module.exports = userRouter;
