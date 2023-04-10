const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  course: {
    type: String,
    required: true
  },
  hours: {
    type: Number,
    required: true
  },
  schedule: {
    type: [Date],
    required: true
  }
});

module.exports=mongoose.model('Schedule', scheduleSchema);
