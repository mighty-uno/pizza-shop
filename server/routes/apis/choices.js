const router = require("express").Router();
const {
  get,
  add,
  update,
  remove,
} = require("../../controllers/api/categories");

router.get("/", async (req, res) => {
  try {
    const result = await get(req.params);
    res.send(200).send(result);
  } catch (e) {
    res.send(500).send(e);
  }
});
router.post("/", async (req, res) => {
  try {
    const result = await add(req.body);
    res.send(200).send(result);
  } catch (e) {
    res.send(500).send(e);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const result = await update(req.body, req.params);
    res.send(200).send(result);
  } catch (e) {
    res.send(500).send(e);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const result = await remove(req.params);
    res.send(200).send(result);
  } catch (e) {
    res.send(500).send(e);
  }
});

module.exports = router;
