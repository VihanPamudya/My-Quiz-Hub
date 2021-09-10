const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  username: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },

  password2: {
    type: String,
    require: true,
  },
});

mongoose.model("Student", studentSchema);
