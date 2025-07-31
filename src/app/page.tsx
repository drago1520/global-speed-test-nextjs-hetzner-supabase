import { db } from "@/lib/drizzle";

export default async function Page() {
  const todos = await db.query.todo.findMany()
  return (
    <pre>
      {new Date().toLocaleTimeString()}
      {JSON.stringify(todos)}
    </pre>
  );
}

export const dynamic = 'force-dynamic';