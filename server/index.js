const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db/db.js");

const ProductRouter = require("./routers/ProductRouter.js");
const UserRouter = require("./routers/UserRouter.js");
const OrderRouter = require("./routers/OrderRouter.js");
const ChatRouter = require("./routers/ChatRouter.js");

const { createServer } = require("http");
// const { Server } = require ("socket.io");

const ConnectSocket = require("./config/socket/socket.js");

const cloudinary = require("./config/cloudinary/cloudinary.js");
const PaymentRouter = require("./routers/PaymentRouter.js");
const SelectListRouter = require("./routers/SelectListRouter.js"); // Sửa tên biến
const ListTypeProductRouter = require("./routers/ListTypeProductRouter.js");
//const Root = require ("./routers/Root.Router.js");

const Root = require("./routers/Root.Router.js"); // Thay require bằng const

dotenv.config();
process.env.TOKEN_SECRET;

const app = express();
const PORT = process.env.PORT || 4000;
const server = createServer(app);

ConnectSocket(server);
connectDB();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/", Root);

//app.use("/products", ProductRouter);
//app.use("/user", UserRouter);
//app.use("/order", OrderRouter);
//app.use("/chat", ChatRouter);
//app.use("/payment", PaymentRouter);
//app.use("/selectList", SelectListRouter);
//app.use("/typeList", ListTypeProductRouter);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

app.post("/api/upload", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "dev_setups",
    });
    res.json({ msg: "yaya" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});

app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    data: "ok",
  });
});

server.listen(PORT, () =>
  console.log(`server running on port ${PORT} : http://localhost:${PORT}`)
);
