const express = require("express");

const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create({ name: req.body.name, eaten: req.body.eaten }, (result) => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id/eaten", (req, res) => {
  const condition = { id: req.params.id };
  const update = { eaten: req.body.value };

  burger.update(update, condition, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

router.delete("/api/burgers/:id", (req, res) => {
  const condition = { id: req.params.id };

  burger.delete(condition, (result) => {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;