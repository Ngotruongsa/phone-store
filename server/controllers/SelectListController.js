const expressAsyncHandler = require("express-async-handler");
const SelectListModel = require("../models/SelectListModel.js");
const cloudinary = require("cloudinary");
const SelectListrouter = require("../routers/SelectListRouter.js");

const createOptionByproperty = expressAsyncHandler(async (req, res) => {
  const SelectListItem = new SelectListModel({
    name: req.body.name,
    property: req.body.property,
    options: req.body.options,
  });
  await SelectListItem.save();
  res.send(SelectListItem);
});

const getAllOptionByproperty = expressAsyncHandler(async (req, res) => {
  const SelectList = await SelectListModel.find({});
  if (SelectList) {
    res.send(SelectList);
  } else {
    res.send({ error: "no select list" });
  }
});

const UpdateSelectOption = expressAsyncHandler(async (req, res) => {
  const UpdateSelect = await SelectListModel.findById({ _id: req.params.id });
  if (UpdateSelect) {
    UpdateSelect.name = req.body.name;
    UpdateSelect.property = req.body.property;
    UpdateSelect.options = req.body.options;
  }

  await UpdateSelect.save();
  res.send(UpdateSelect);
});

const getSelectOptionById = expressAsyncHandler(async (req, res) => {
  const UpdateSelect = await SelectListModel.findById({ _id: req.params.id });
  if (UpdateSelect) {
    res.send(UpdateSelect);
  } else {
    res.send({ message: "no select " });
  }
});

const deleteSelectOption = expressAsyncHandler(async (req, res) => {
  const UpdateSelect = await SelectListModel.findById({ _id: req.params.id });
  await UpdateSelect.remove();

  res.send({ msg: "deleted select" });
});

module.exports = {
  createOptionByproperty,
  getAllOptionByproperty,
  UpdateSelectOption,
  getSelectOptionById,
  deleteSelectOption,
};
