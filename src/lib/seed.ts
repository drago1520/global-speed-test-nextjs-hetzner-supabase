import { drizzle } from "drizzle-orm/node-postgres";
import { seed } from "drizzle-seed";
import { todo } from "@/models/schema";

async function main() {
  const db = drizzle(process.env.DATABASE_URL!);
  await seed(db, { todo });
}

main();