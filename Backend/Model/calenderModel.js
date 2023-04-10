const mongoose=require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    course: String,
    hours: Number,
    date: Date
  });

module.exports=mongoose.model('Enroll', enrollmentSchema);