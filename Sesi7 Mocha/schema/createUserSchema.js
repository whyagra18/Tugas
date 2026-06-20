module.exports = {
  type: "object",
  properties: {
    name: { type: "string" },
    username: { type: "string" },
    email: { type: "string" },
    id: { type: "integer" }
  },
  required: [
    "name",
    "username",
    "email"
  ]
};