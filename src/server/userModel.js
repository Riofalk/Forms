import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    unique: true,
  },
  pwd: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
