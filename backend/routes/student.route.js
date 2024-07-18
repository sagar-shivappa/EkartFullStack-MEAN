const express = require("express");

const {
  getAllStudents,
  getStudentById,
  postStudentData,
  deleteStudentById,
  updateStudentDataByID,
} = require("../controllers/student.controller");

const router = express.Router();

// Post a new student data
router.post("/student", postStudentData )

// Get all students
router.get("/students", getAllStudents);

// Get a students by id
router.get("/student/:id", getStudentById);

// Update a students by id
router.put("/student/:id", updateStudentDataByID);

// Delete a students by id
router.delete("/student/:id", deleteStudentById);

module.exports = router;