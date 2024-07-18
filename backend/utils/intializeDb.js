// Import Models as below
const Student = require("../models/student.model");

const intializeDB = async () => {
  // Check if data presesent using the model as belwo
  
   const students = await Student.find();
  if (students.length != 0) {
    return;
  } 

  // Add data if not present
const testStudent1 = new Student({
      firstName: "Jake",
      lastName: "Johnson",
      email: "jj@school.com",

    });
    await testStudent1.save();
};

module.exports = {
  intializeDB,
};

