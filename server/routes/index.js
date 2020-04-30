const apiRoutes = require("./apis");

module.exports = function (app) {
  app.use("/api", apiRoutes);
};
