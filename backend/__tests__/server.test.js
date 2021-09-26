require('express-async-errors');
const request = require('supertest');
const app = require('../../server');


describe.skip("Dummy Server Test", () => {
  jest.setTimeout(10000);
  it("should respond with status code 200", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });
});