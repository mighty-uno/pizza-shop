const { Choices } = require("../../../models");

async function add(req) {
  const choice = new Choices(req);
  const result = await choice.save();
  return result;
}

async function get(req) {
  return await Choices.find().sort({ name: 1 }).exec();
}

async function update(body, params) {
  var choice = await Choices.findById(params.id).exec();
  choice.set(body);
  var result = await choice.save();
  return result;
}

async function remove(req) {
  var result = await Choices.deleteOne({ _id: params.id }).exec();
  return result;
}

module.exports = {
  add,
  remove,
  get,
  update,
};
