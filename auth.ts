import {  betterAuth } from 'better-auth';
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/index";
import * as schema from "@/db/schema";

export const auth = betterAuth({
  socialProviders: {
      google: {
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      }
  },

  /** if no database is provided, the user data will be stored in memory.
   * Make sure to provide a database to persist user data **/
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema
  })
});