const mongoose = require("mongoose");
const { Schema } = mongoose;

const Category = new Schema(
  {
    name: { type: String, required: true },

    image: { type: String, default: "" },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true } //adds fields createdAt & updatedAt automaticly to new Date() timestamp
);

module.exports = mongoose.model("categories", Category);
