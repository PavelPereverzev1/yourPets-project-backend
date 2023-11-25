const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

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

newsSchema.post("save", handleMongooseError);

const News = model("news", newsSchema);

module.exports = News;
