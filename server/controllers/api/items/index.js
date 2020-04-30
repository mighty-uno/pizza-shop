const { Category } = require("../../../models");

async function add(req) {
  const category = new Category(req);
  const result = await category.save();
  return result;
}

async function get(req) {}

async function update(req) {}

async function remove(req) {}

module.exports = {
  add,
  remove,
  get,
  update,
};
