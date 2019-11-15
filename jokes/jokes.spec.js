const request = require("supertest");
const jokesRouter = require("./jokes-router");

describe("GET / jokesRouter", () => {
  it("should return 200 http status code", () => {
    return request(jokesRouter)
      .get("/")
      .then(response => {
        expect(response.status).toBe(401);
      });
  });
  test("result contains json format", () => {
    request(jokesRouter)
      .get("/")
      .expect("Content-Type", /json/);
  });
});
