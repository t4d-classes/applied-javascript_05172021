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

  RestRouter.route("/:id").delete((req, res) => {
    const colorId = parseInt(req.params.id, 10);

    const colorIndex = colors.findIndex((c) => c.id === colorId);

    colors.splice(colorIndex, 1);

    res.sendStatus(204);
  });

  return RestRouter;
};
