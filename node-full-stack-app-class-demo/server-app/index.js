require("dotenv").config();

const { PORT, NODE_ENV, CLIENT_APP_URL } = process.env;

const { logger } = require("./logger");
const express = require("express");
const { createRestRouter } = require("./routers/RestRouter");

const app = express();

app.use(express.json());

app.use("/api/colors", createRestRouter());

if (NODE_ENV === "development") {

    const httpProxy = require('http-proxy');
    const clientAppProxy = httpProxy.createProxyServer();

    app.use('/', (req, res) => {
      clientAppProxy.web(req, res, { target: CLIENT_APP_URL });
    });
    
} else {
  app.use("/", express.static("./public"));
}

app.listen(PORT, (err) => {
  if (err) {
    logger.error("Error: " + err);
    return;
  }

  logger.info(`server listening on port ${PORT}`);
});
