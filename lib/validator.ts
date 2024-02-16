import * as z from "zod";

export const formSchema = z.object({
  position: z
    .string()
    .min(3, "Location must be at least 3 characters")
    .max(400, "Location must be less than 400 characters"),
  gender: z.string(),
  career: z.string(),
  married: z.string(),
  relationship: z.string(),
  dob: z.date(),
  username: z.string(),
  photo: z.string(),
});
