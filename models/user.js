const { Schema, Types, model } = require("mongoose");

const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: emailRegExp,
      unique: true,
    },
    birthday: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
      ref: "Notice",
    },
    city: {
      type: String,
      default: "",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      required: true,
    },
    avatarId: {
      type: String,
      default: null,
    },
    favorites: {
      type: Array,
      default: [{ type: Types.ObjectId }],
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

module.exports = User;
