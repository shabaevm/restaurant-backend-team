const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
  },
  { timestamps: true }
);

const User = mongoose.model('User', usesrSchema);

module.exports = User;
