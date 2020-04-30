const { Items } = require("../../../models");

async function add(req) {
  const item = new Items(req);
  const result = await item.save();
  return result;
}

async function get(req) {
  return await Items.find()
    .populate({ path: "category", select: "name" })
    .populate({ path: "choices", select: "name" })
    .sort({ name: 1 })
    .exec();
}

async function update(body, params) {
  var item = await Items.findById(params.id).exec();
  item.set(body);
  var result = await item.save();
  return result;
}

async function remove(params) {
  var result = await Items.deleteOne({ _id: params.id }).exec();
  return result;
}

module.exports = {
  add,
  remove,
  get,
  update,
};
