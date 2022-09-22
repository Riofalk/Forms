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

export default mongoose.model("Users", UserSchema);
