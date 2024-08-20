// File: Root.Router.js

const express = require("express");
const ProductRouter = require("./ProductRouter");
const UserRouter = require("./UserRouter");
const OrderRouter = require("./OrderRouter");
const ChatRouter = require("./ChatRouter");
const PaymentRouter = require("./PaymentRouter");
const SelectListRouter = require("./SelectListRouter");
const ListTypeProductRouter = require("./ListTypeProductRouter");

const Root = express.Router();

Root.use("/products", ProductRouter);
Root.use("/user", UserRouter);
Root.use("/order", OrderRouter);
Root.use("/chat", ChatRouter);
Root.use("/payment", PaymentRouter);
Root.use("/selectList", SelectListRouter);
Root.use("/typeList", ListTypeProductRouter);

module.exports = Root;
