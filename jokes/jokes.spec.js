const request = require("supertest");
const jokesRouter = require("./jokes-router");
const server = require('../api/server')

describe("GET / jokesRouter", () => {
  it("should return 200 http status code", () => {
    return request(server)
      .get("/")
      .then(response => {
        expect(response.status).toBe(401);
      });
  });
  test("result contains json format", () => {
    request(server)
      .get("/")
      .expect("Content-Type", /json/);
  });
});
