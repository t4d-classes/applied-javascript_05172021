require("dotenv").config();

const { PORT } = process.env;

const { logger } = require("./logger");
const express = require("express");
const { createRestRouter } = require("./routers/RestRouter");

const app = express();

app.use(express.json());

app.use("/api/colors", createRestRouter());

app.use("/", express.static("./public"));

app.listen(PORT, (err) => {
  if (err) {
    logger.error("Error: " + err);
    return;
  }

  logger.info(`server listening on port ${PORT}`);
});
