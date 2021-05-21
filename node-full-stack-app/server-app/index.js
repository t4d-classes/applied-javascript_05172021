require("dotenv").config();

const { PORT } = process.env;

const { logger } = require("./logger");
const express = require("express");

const app = express();

app.use("/", express.static("./public"));

app.listen(PORT, (err) => {
  if (err) {
    logger.error("Error: " + err);
    return;
  }

  logger.info(`server listening on port ${PORT}`);
});
