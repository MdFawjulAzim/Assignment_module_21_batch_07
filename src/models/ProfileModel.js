const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    NIDNumber: { type: String, unique: true, required: true },
    phoneNumber: { type: String, unique: true, required: true },
    bloodGroup: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);


const ProfileModel = mongoose.model('profiles',DataSchema);

module.exports = ProfileModel;

