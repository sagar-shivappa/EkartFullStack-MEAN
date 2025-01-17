const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
const { MongoMemoryServer } = require("mongodb-memory-server");
const studentModel = require("../models/student.model");
require("dotenv").config();

let mongoServer;

/* Establish a MongoDB in-memory server before all tests. */
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = await mongoServer.getUri();
  await mongoose.connect(mongoUri, { useNewUrlParser: true });
});

/* Close the MongoDB in-memory server and database after all tests. */
afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

/* Testing the API endpoints. */
describe("Delete /student/:id", () => {
  it("should delete student data", async () => {

    const Student = mongoose.model("Student");
    const testStudent1 = new Student({
      firstName: "Jake",
      lastName: "Johnson",
      email: "jj@school.com",

    });
    await testStudent1.save();

    const res = await request(app).delete(`/student/${testStudent1._id}`);
    expect(res.statusCode).toBe(200);
  });

  it("should return 404 if no student exists", async () => {
    
    const Student = mongoose.model("Student");
    const testStudent1 = new Student({
        firstName: "Jake",
        lastName: "Johnson",
        email: "jj@school.com",
  
      });
  
    const res = await request(app).delete(`/student/${testStudent1._id}`);
    expect(res.statusCode).toBe(404);
    expect(res.text).toBe("No student with given id");
  });

  it("should return 500 if error", async () => {
    const findMock = jest
      .spyOn(studentModel, "deleteOne")
      .mockRejectedValueOnce("Error Occured :(");

    const res = await request(app).delete("/student/testid");
    expect(res.statusCode).toBe(500);
    expect(res.body).toBe("Error Occured :(");
  });
  
});