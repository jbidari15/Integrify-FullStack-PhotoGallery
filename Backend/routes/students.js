const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Student.find()
    .then(students => {
      res.json(students);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post("/", (req, res) => {
  db.Student.create(req.body)
    .then(student => {
      res.status(201).json(student);
    })
    .catch(err => {
      res.send(err);
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
  db.Student.findOneAndUpdate({ _id: req.params.studentId }, req.body, {
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
  db.Student.remove({ _id: req.params.studentId })
    .then(() => {
      res.send({ message: "The student is deleted from the database" });
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
