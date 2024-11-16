import { cwd } from 'process'
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { loadEnvConfig } from '@next/env';
import * as schema1 from '@/db/schemas/schemas';

loadEnvConfig(cwd())

const sql = neon(process.env.DATABASE_URL);
const db = drizzle({ client: sql }, { schema:{...schema1} });

export { db };
