const mongoose = require("mongoose");
const mongoURI =
  "mongodb://jkb:jkb123@ds113452.mlab.com:13452/integirfy-photo-gallery";
mongoose.set("debug", true);
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

mongoose.Promise = Promise;

module.exports.Student = require("./student");
