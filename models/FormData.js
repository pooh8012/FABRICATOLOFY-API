const { model, Schema } = require("mongoose");

const formData = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  address: String,
});

module.exports = model("FormData", formData);
