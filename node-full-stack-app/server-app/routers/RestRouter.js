const express = require("express");

module.exports.createRestRouter = () => {
  const RestRouter = express.Router();

  const colors = [
    { id: 1, name: "red" },
    { id: 2, name: "green" },
  ];

  RestRouter.route("/")
    .get((req, res) => {
      res.json(colors);
    })
    .post((req, res) => {
      const newColor = {
        ...req.body,
        id: Math.max(...colors.map((c) => c.id), 0) + 1,
      };

      colors.push(newColor);

      res.json(newColor);
    });

  return RestRouter;
};
