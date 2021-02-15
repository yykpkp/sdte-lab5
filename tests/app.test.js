const request = require("supertest");
const server = require("../src/server");

describe("StudentID Endpoints", () => {
  it("Should get student id", async () => {
    const res = await request(server).get("/student_id");
    expect(res.statusCode).toEqual(200);
    expect(res.text).not.toEqual("NO_ONE");
  });
});
