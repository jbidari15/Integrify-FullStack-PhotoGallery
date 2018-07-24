const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  title: String,
  nationality: String,
  src: String,
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
