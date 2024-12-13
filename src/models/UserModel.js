const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const DataSchema = mongoose.Schema(
  {
    email:{type:String,unique:true,required:true,lowercase:true},
    password: { type: String, required: true },
    otp:{type:String,required:true},
  },
  { timestamps: true, versionKey: false }
);

// Hash password before save
DataSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const UserModel = mongoose.model("users", DataSchema);
module.exports = UserModel;