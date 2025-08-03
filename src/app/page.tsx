import { db, db2, db3 } from "@/lib/drizzle";

export default async function Page() {
  const localStart = performance.now();
  const _todos = await db.query.todo.findMany()
  const localEnd = performance.now();
  const localLatency = localEnd - localStart;

  const httpStart = performance.now()
  const _todosHTTP = await db3.query.todo.findMany()
  const httpEnd = performance.now()
  const httpLatency = httpEnd - httpStart

  const neonPgStart = performance.now()
  const _neonPgTodos = await db2.query.todo.findMany()
  const neonPgEnd = performance.now()
  const neonPgLatency = neonPgEnd - neonPgStart

  return (
    <>
      <h1>This is Coolify DB</h1>
        {new Date().toLocaleTimeString()}
        <h3>Neon HTTP DB Query latency: <span className="text-red-400">{httpLatency.toFixed(2)} ms</span></h3>
        <h3>Local db with node-postgres DB Query latency: <span className="text-red-400">{localLatency.toFixed(2)}</span></h3>
        <h3>Neon node-postgres (TCP) DB Query latency: <span className="text-red-400">{neonPgLatency.toFixed(2)} ms</span></h3>
    </>
  );
}

export const dynamic = 'force-dynamic';