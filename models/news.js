const { Schema, model } = require("mongoose");

const newsSchema = new Schema(
  {
    imgUrl: {
      type: String,
    },
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    date: {
      type: Date,
    },
    url: {
      type: String,
    },
    id: {
      type: String,
      select: false,
    },
  },
  {
    versionKey: false,
  }
);

const News = model("news", newsSchema);

module.exports = News;
