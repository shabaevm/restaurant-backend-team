const mongoose = require('mongoose');

const categorySchema = mongoose.Schema(
  {

  },
  { timestamps: true }
);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
