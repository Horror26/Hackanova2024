import { connectToDatabase } from "../database";
import User from "../database/models/user.model";

export default async function getCurrentUser() {
  try {
    await connectToDatabase();
    const id = localStorage.getItem("id");
    const currentUser = await User.findById(id);

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      dob: currentUser.dob.toISOString(),
    };
  } catch (error: any) {
    return null;
  }
}
