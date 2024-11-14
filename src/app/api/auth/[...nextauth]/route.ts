import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/lib/db"; // Adjust the import path based on your project structure
import { users } from "@/lib/db/schema"; // Import your Drizzle schema
import { eq } from "drizzle-orm";

export const GET = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        console.log("User details from Google:", user);

        if (!user.email) {
          console.error("User email is missing, cannot proceed.");
          return false; // Without an email, we can't proceed
        }

        // Check if the user already exists in the database
        const existingUser = await db
          .select()
          .from(users)
          .where(eq(users.email, user.email))
          .execute();

        console.log("Existing user check result:", existingUser);

        // If the user doesn't exist, insert them into the database
        if (existingUser.length === 0) {
          console.log("Inserting new user into the database...");

          await db.insert(users).values({
            email: user.email,
            name: user.name ?? "Unknown User", // Default value if name is undefined
            password: "", // Empty password for Google users
          }).execute();

          console.log("User inserted successfully.");
        } else {
          console.log("User already exists in the database.");
        }

        return true;
      } catch (error) {
        console.error("Error saving user:", error);
        return false;
      }
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          name: token.name || session.user?.name || "Unknown User",
          email: token.email || session.user?.email || "",
          image: token.picture || session.user?.image || "",
        };

        // Store the user ID in the session (not directly in `user`)
        (session as any).userId = token.sub; 
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

// You can use the same export for both GET and POST, as NextAuth handles both
export const POST = GET;
