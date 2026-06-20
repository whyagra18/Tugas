const axios = require("axios");
const { expect } = require("chai");
const Ajv = require("ajv");

const ajv = new Ajv();

const createUserSchema = require("../schema/createUserSchema");

describe("POST USER", () => {

  it("Success Create User", async () => {

   const payload = {
  name: "Agra",
  username: "agra123",
  email: "agra@mail.com"
};

const response = await axios.post(
  "https://jsonplaceholder.typicode.com/users",
  payload
);

expect(response.status).to.equal(201);

expect(response.status).to.equal(201);

    const validate = ajv.compile(createUserSchema);

    const valid = validate(response.data);

    expect(valid).to.equal(true);

  });

});