import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Remove the dotenv config
// config({ path: ".env" }); 

const sql = neon(process.env.DATABASE_URL!);

export const db = drizzle(sql);