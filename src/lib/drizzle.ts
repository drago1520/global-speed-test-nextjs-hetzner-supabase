// Make sure to install the 'pg' package 
import { drizzle } from 'drizzle-orm/node-postgres';
import { drizzle as httpDrizzle } from 'drizzle-orm/neon-http';
import * as schema from '@/models/schema'

export const db = drizzle(process.env.DATABASE_URL!, {schema});
export const db2 = drizzle(process.env.NEON_URL!, {schema}); // neon-no-replicas
export const db3 = httpDrizzle(process.env.NEON_URL!, {schema});