import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { db } from "../../../lib/db";
import { InsertUserSchema, users } from "../../../../drizzle/schema";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password, name } = req.body;

    try {
      // Validate incoming request using InsertUserSchema
      const validatedData = InsertUserSchema.parse({
        email,
        password,
        name,
      });

      // Hash the password
      //const hashedPassword = await bcrypt.hash(validatedData.password, 10);

      // Insert a new user into the database
      await db.insert(users).values({
        email: validatedData.email,
        //password: hashedPassword,
        name: validatedData.name,
      });

      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid data", details: error });
      }
      res.status(500).json({ error: "Something went wrong or User already exists" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
export function GET(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method GET Not Allowed`);
}