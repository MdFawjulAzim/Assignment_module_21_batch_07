const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    email:{type:String,unique:true,required:true,lowercase:true},
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    NIDNumber: { type: String, unique: true, required: true },
    phoneNumber: { type: String, unique: true, required: true },
    bloodGroup: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const UserModel = mongoose.model("users", DataSchema);
module.exports = UserModel;