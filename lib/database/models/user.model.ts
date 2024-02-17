import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  photo: { type: String, required: true },
  career: { type: String, required: true },
  married: { type: String, required: true },
  relationship: { type: String, required: true },
  position: { type: String, required: true },
});

const User = models.User || model("User", UserSchema);

export default User;
