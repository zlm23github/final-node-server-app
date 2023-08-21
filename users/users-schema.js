import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  textarea: String,
  mood: String,
  like: Boolean,
  likes: Number,
  img: String,
}, { collection: "users" });
export default userSchema;