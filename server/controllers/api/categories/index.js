const { Category } = require("../../../models");

async function add(req) {
  const category = new Category(req);
  const result = await category.save();
  return result;
}

async function get(req) {
  return await Category.find().sort({ name: 1 }).exec();
}

async function update(body, params) {
  var category = await Category.findById(params.id).exec();
  category.set(body);
  var result = await category.save();
  return result;
}

async function remove(req) {
  var result = await Category.deleteOne({ _id: params.id }).exec();
  return result;
}

module.exports = {
  add,
  remove,
  get,
  update,
};
