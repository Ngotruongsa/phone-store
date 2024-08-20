const expressAsyncHandler = require("express-async-handler");
const ConversationModel = require("../models/ConversationModel.js");
const MessageModel = require("../models/MessageModel.js");

const getAllConversation = expressAsyncHandler(async (req, res) => {
  const allConversation = await ConversationModel.find().sort({
    updatedAt: -1,
  });
  res.send(allConversation);
});

const getMessageByConversation = (req, res) => {
  ConversationModel.findOne({
    $or: [{ idUser: req.query.idUser }, { _id: req.query.idConversation }],
  }).then((user) => {
    if (!user) return;

    MessageModel.find({
      idConversation: user._id,
    })
      .populate("idConversation")
      .exec((err, messages) => {
        if (!messages) {
          return res.status(400).json({
            message: "Thất bại",
          });
        }
        return res.status(200).json({
          messageList: messages,
        });
      });
  });
};

const postSaveMessage = expressAsyncHandler(async (req, res) => {
  const messageText = new MessageModel({
    sender: req.body.sender,
    message: req.body.message,
    idConversation: req.body.idConversation,
  });
  const createMessage = await messageText.save();
  res.send(createMessage);
});

module.exports = {
  getAllConversation,
  getMessageByConversation,
  postSaveMessage,
};
