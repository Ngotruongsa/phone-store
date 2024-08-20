const expressAsyncHandler = require("express-async-handler");
const cloudinary = require("cloudinary");
const ListTypeProductModel = require("../models/ListTypeProductModel.js");

const getAllTypeProduct = expressAsyncHandler(async (req, res) => {
  const allType = await ListTypeProductModel.find({});
  res.send(allType);
});

const createNewTypeProduct = expressAsyncHandler(async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path, {
    folder: "dev_setups",
  });
  const newType = new ListTypeProductModel({
    name: req.body.name,
    img: result.secure_url,
    cloudinary_id: result.public_id,
  });

  await newType.save();
  res.send(newType);
});

const deleteTypeProduct = expressAsyncHandler(async (req, res) => {
  const typeProduct = await ListTypeProductModel.findById({
    _id: req.params.id,
  });

  await cloudinary.uploader.destroy(typeProduct.cloudinary_id);

  if (typeProduct) {
    await typeProduct.remove();
    res.send({ msg: "deleted type product" });
  } else {
    res.send({ msg: "product not found" });
  }
});

module.exports = {
  getAllTypeProduct,
  createNewTypeProduct,
  deleteTypeProduct,
};
