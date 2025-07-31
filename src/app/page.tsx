import { db } from "@/lib/drizzle";

export default async function Page() {
  const startTime = performance.now();
  const todos = await db.query.todo.findMany()
  const endTime = performance.now();
  const latencyMs = endTime - startTime;
  return (
    <>
      <h1>This is Coolify DB</h1>
      <button><a href="/neon-no">Neon No replicas test node-postgres</a></button>
      <pre>
        {new Date().toLocaleTimeString()}
        DB Query latency: {latencyMs.toFixed(2)}
        {JSON.stringify(todos[0])}
      </pre>
    </>
  );
}

export const dynamic = 'force-dynamic';