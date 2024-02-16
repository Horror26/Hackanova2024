import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: Boolean, required: true },
  photo: { type: String, required: true },
  career: { type: String, required: true },
  married: { type: Boolean, required: true },
  relationship: { type: Boolean, required: true },
  position: { type: String, required: true },
});

const User = models.User || model("User", UserSchema);

export default User;
