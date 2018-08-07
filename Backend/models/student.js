const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  title: String,
  nationality: String,
  src: {
    type: String,
    required: true
  },
  alt: String,
  skills: [String],
  whySoftwareDeveloper: String,
  longTermVision: String,
  motivatesMe: String,
  favoriteQuote: String,
  joinedOn: String
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
