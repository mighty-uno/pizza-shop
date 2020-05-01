const router = require("express").Router();

const categoryRoute = require("./catgories");
const itemRoute = require("./items");
const choiceRoute = require("./choices");

router.use("/category", categoryRoute);
router.use("/item", itemRoute);
router.use("/choice", choiceRoute);

module.exports = router;
