// const mongoose = require("mongoose");
// const { getUserByEmail } = require("../../database/queries");
const { loginService } = require("../../services/userServices");

describe("should create user", () => {
  test("should login and respond with userdata and token", async () => {
    jest.setTimeout(50000);

    const userdata = { email: "mailk@email.com", password: "pass1" };

    const results = await loginService(userdata);

    expect(results.user).toBeTruthy();
  });
});
