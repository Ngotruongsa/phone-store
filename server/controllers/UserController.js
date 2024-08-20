const UserModel = require("../models/UserModel.js");
const { generateToken } = require("../untils/until.js");
const expressAsyncHandler = require("express-async-handler");

const getAllUser = (req, res) => {
  UserModel.find({})
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
};

const registerUser = expressAsyncHandler(async (req, res) => {
  const existingUser = await UserModel.findOne({ email: req.body.email });

  if (existingUser) {
    return res.status(400).send({ message: "Email đã tồn tại" });
  }
  const user = new UserModel({
    // _id: req.body._id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address || "",
    phone: req.body.phone || "",
    isAdmin: false,
  });
  const createUser = user.save();
  res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
    password: user.password,
    address: user.address,
    phone: user.phone,
    token: generateToken(user),
  });
});

const login = expressAsyncHandler(async (req, res) => {
  const user = await UserModel.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      address: user.address,
      phone: user.phone,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  } else {
    res.status(401).send({ message: "Email hoặc password không đúng !" });
  }
});

const DeleteUser = expressAsyncHandler(async (req, res) => {
  const user = await UserModel.findById({ _id: req.params.id });

  if (user) {
    await user.remove();
    res.send({ message: "user deleted" });
  } else {
    res.send({ message: "user not exists" });
  }
});

const changePassword = expressAsyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  const { oldPassword, newPassword } = req.body;

  if (user) {
    if (user.password !== oldPassword) {
      res.status(400).send({ message: "Mật khẩu cũ không đúng !" });
    } else {
      user.password = newPassword;
      await user.save();
      res.send({ message: "Thay đổi mật khẩu thành công" });
    }
  } else {
    res.status(404).send({ message: "User not exists" });
  }
});

const updateUser = expressAsyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.params.id);

  if (user) {
    if (req.body.name !== undefined) user.name = req.body.name;
    if (req.body.email !== undefined) user.email = req.body.email;
    if (req.body.address !== undefined) user.address = req.body.address;
    if (req.body.phone !== undefined) user.phone = req.body.phone;

    const updatedUser = await user.save();
    res.send({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      address: updatedUser.address,
      phone: updatedUser.phone,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser),
    });
  } else {
    res.status(404).send({ message: "User Not Found" });
  }
});

const getUserDetails = expressAsyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: "User Not Found" });
  }
});

module.exports = {
  getAllUser,
  registerUser,
  login,
  DeleteUser,
  changePassword,
  updateUser,
  getUserDetails,
};
