const mongoose = require('mongoose');

const tableSchema = mongoose.Schema(
  {
    tableNumber: {
      type: Number,
      required: true,
    },

    tableCapacity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;
