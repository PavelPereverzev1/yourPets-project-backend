const { Schema, Types, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const noticeSchema = new Schema(
  {
    noticeType: {
      type: String,
      enum: ["sell", "lost-found", "in-good-hands"],
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
    favorite: [{ type: Types.ObjectId, ref: "Users" }],
    owner: {
      type: Types.ObjectId,
      ref: "Users",
      required: [true, "Pet must have an owner"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

noticeSchema.post("save", handleMongooseError);

const Notice = model("notice", noticeSchema);

module.exports = Notice;
