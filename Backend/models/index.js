const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/Integrify-API");

mongoose.Promise = Promise;

module.exports.Student = require("./student");
