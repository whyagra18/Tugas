const axios = require("axios");
const { expect } = require("chai");
const Ajv = require("ajv");

const ajv = new Ajv();

const userSchema = require("../schema/userSchema");

describe("GET USER", () => {

  it("Success Get User", async () => {

    const response = await axios.get(
  "https://jsonplaceholder.typicode.com/users/1"
);

    expect(response.status).to.equal(200);

    const validate = ajv.compile(userSchema);

    const valid = validate(response.data);

    expect(valid).to.equal(true);

  });

});