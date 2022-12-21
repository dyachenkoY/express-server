const yup = require("yup");

const USER_CREATION_SCHEMA = yup.object({
  login: yup.string().required(),
  password: yup.string().required(),
});

module.exports.USER_CREATION_SCHEMA = USER_CREATION_SCHEMA;
