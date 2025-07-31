import { db2 } from "@/lib/drizzle";

export default async function Page() {
  const startTime = performance.now();
  const todos = await db2.query.todo.findMany()
  const endTime = performance.now();
  const latencyMs = endTime - startTime;
  return (
    <>
      <h1>This is Neon DB without global read replicas</h1>
      <pre>
        {new Date().toLocaleTimeString()}
        DB Query latency: {latencyMs.toFixed(2)}
        {JSON.stringify(todos[0])}
      </pre>
    </>
  );
}

export const dynamic = 'force-dynamic';