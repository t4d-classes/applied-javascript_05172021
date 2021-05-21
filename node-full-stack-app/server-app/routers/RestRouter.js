const express = require("express");

module.exports.createRestRouter = () => {
  const RestRouter = express.Router();

  RestRouter.route("/").get((req, res) => {
    res.json([
      { id: 1, name: "red" },
      { id: 2, name: "green" },
    ]);
  });

  return RestRouter;
};
