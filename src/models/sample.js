const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema(
  {
    status: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const statusModel = mongoose.model('status', statusSchema);
module.exports = statusModel;
