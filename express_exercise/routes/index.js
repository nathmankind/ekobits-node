const express = require("express");
const router = express.Router();

const items = [];
var id = 1;

router
  .route("/items")
  .get((req, res) => {
    return res.json(items);
  })
  .post(() => {
    users.push({
      name: req.body.name,
      id: ++id,
    });
    return res.json({ message: "Created" });
  });

router
  .route("/items/:id")
  .get((req, res) => {
    const item = items.find((val) => val.id === Number(req.params.id));
    return res.json(item);
  })
  .patch((req, res) => {
    item.name = req.body.name;
    return res.json({ message: "Updated" });
  })
  .delete((req, res) => {
    items.splice(item.id, 1);
    return res.json({ message: "Deleted" });
  });

module.exports = router;
