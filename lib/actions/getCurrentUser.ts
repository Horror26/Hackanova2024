import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import { getUserById } from "./user.actions";

export default async function getCurrentUser() {
  try {
    await connectToDatabase();
    let id, currentUser;
    if (typeof window !== "undefined" && localStorage.getItem("userId")) {
      console.log(localStorage.getItem("userId"));
      id = localStorage.getItem("userId");
    } else {
      return null;
    }

    if (id !== null) {
      currentUser = await getUserById(id);
    }

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
