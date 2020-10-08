const mongoose = require("mongoose");

const checklistSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Checklist = mongoose.model("Checklist", checklistSchema);

module.exports = Checklist;
