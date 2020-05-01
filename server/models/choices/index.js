const mongoose = require("mongoose");
const { Schema } = mongoose;

const Choices = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
    isActive: {
      type: Boolean,
      default: true,
    },
    price: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("choices", Choices);
