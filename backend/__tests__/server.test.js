require('express-async-errors');
const request = require('supertest');
const app = require('../../server');


describe.skip("Dummy Server Test", () => {
  it("should respond with status code 200", async () => {
    const res = await request(app).get("/api/v1/info");
    expect(res.status).toBe(200);
  });
});