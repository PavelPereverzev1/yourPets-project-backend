const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { swaggerRouter, authRouter, petRoute } = require("./routes");

const app = express();

const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api-docs", swaggerRouter);

app.use("/auth", authRouter);
app.use("/notices", petRoute);
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
