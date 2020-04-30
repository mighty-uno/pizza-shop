const router = require("express").Router();

const categoryRoute = require("./catgories");

router.use("/category", categoryRoute);

module.exports = router;
