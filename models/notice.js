const { Schema, Types, model } = require("mongoose");
const CATEGORIES = require("../constants/noticeCategories");

const noticeSchema = new Schema(
  {
    noticeType: {
      type: String,
      enum: CATEGORIES,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    petType: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: null,
    },
    comments: {
      type: String,
    },
    photoURL: {
      type: String,
      required: true,
    },
    photoId: {
      type: String,
      default: null,
    },
    favorite: [{ type: Types.ObjectId, ref: "User" }],
    owner: {
      type: Types.ObjectId,
      ref: "user",
      required: [true, "Pet must have an owner"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Notice = model("notice", noticeSchema);

module.exports = Notice;
