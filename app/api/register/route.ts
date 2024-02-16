import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/models/user.model";

export async function POST(request: Request) {
  await connectToDatabase();
  const body = await request.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
