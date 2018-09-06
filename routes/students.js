const express = require("express");
const router = express.Router();
const db = require("../models");
const api_key = require("../config/keys").api_key;
const api_secret = require("../config/keys").api_secret;
var multer = require("multer");
var storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var imageFilter = function(req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};
var upload = multer({ storage: storage, fileFilter: imageFilter });

var cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dsf9xrrux",
  api_key,
  api_secret
});

router.get("/", (req, res) => {
  db.Student.find()
    .then(students => {
      res.json(students);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post("/", upload.single("src"), (req, res) => {
  cloudinary.uploader.upload(req.file.path, function(result) {
    // add cloudinary url for the image to the body object under src property
    const skills = req.body.skills.split(",");
    const formData = { ...req.body, src: result.secure_url, skills };
    db.Student.create(formData)
      .then(student => {
        res.status(201).json(student);
      })
      .catch(err => {
        res.send(err);
      });
  });
});
router.get("/:studentId", (req, res) => {
  db.Student.findById(req.params.studentId)
    .then(foundStudent => {
      res.json(foundStudent);
    })
    .catch(err => {
      res.send(err);
    });
});

router.put("/:studentId", (req, res) => {
  db.Student.findOneAndUpdate({ id: req.params.studentId }, req.body, {
    new: true
  })
    .then(updatedStudent => {
      res.json(updatedStudent);
    })
    .catch(err => {
      res.send(err);
    });
});

router.delete("/:studentId", (req, res) => {
  db.Student.remove({ id: req.params.studentId })
    .then(() => {
      res.send({ message: "The student is deleted from the database" });
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
