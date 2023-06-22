const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  value: {
    required: true,
    type: String,
  },
  requiredLength: {
    required: true,
    type: Number,
  },
  type: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Test_data", TestSchema);
