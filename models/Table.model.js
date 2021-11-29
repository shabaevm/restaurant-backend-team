const mongoose = require('mongoose');

const tableSchema = mongoose.Schema(
  {
  },
  { timestamps: true }
);

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;
