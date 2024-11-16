import { loadEnvConfig } from '@next/env'
import { cwd } from 'process'
import { defineConfig } from 'drizzle-kit'

loadEnvConfig(cwd())


export default defineConfig({
  out: './db/migrations',
  schema: './db/schemas/*',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});