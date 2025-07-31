import { db } from "@/lib/drizzle";

export default async function Page() {
  const startTime = performance.now();
  const todos = await db.query.todo.findMany()
  const endTime = performance.now();
  const latencyMs = endTime - startTime;
  return (
    <pre>
      {new Date().toLocaleTimeString()}
      DB Query latency: {latencyMs.toFixed(2)}
      {JSON.stringify(todos)}
    </pre>
  );
}

export const dynamic = 'force-dynamic';