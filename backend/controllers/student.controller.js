const Student = require("../models/student.model");

const postStudentData = async (req, res) => {
  try {
    const studentData = req.body;
    if (studentData.firstName && studentData.lastName && studentData.email) {
      let newStudent = new Student(studentData);
      await newStudent.save();
      res.status(201).send(`Student added with id ${newStudent._id}`);
    } else {
      res.status(400).send("All fields are required");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    if (students.length == 0) {
      res.status(404).send("No Student found");
      return;
    }
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const studentData = await Student.findById(id);
    if (!studentData) {
      res.status(404).send("No student with given id");
      return;
    }
    res.status(200).json(studentData);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateStudentDataByID = async (req, res) => {
  try {
    const { id } = req.params;
    const dataToBeUpdated = req.body;
    if (
      dataToBeUpdated.firstName ||
      dataToBeUpdated.lastName ||
      dataToBeUpdated.email
    ) {
      const response = await Student.findByIdAndUpdate(id, dataToBeUpdated);
      if (response != null) {
        res.status(204).send();
      } else {
        res.status(404).send("No student with given id");
      }
    } else {
      res.status(400).send("Please send valid data")
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Student.deleteOne({ _id: id });
    if (data.deletedCount) {
      res.status(200).send(data);
    } else {
      res.status(404).send("No student with given id");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  postStudentData,
  getAllStudents,
  getStudentById,
  deleteStudentById,
  updateStudentDataByID,
};
