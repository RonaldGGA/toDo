// src/app/dashboard/stats/page.jsx

import Link from "next/link";

export default function StatsPage() {
  return (
    <div>
      <Link href="/dashboard/stats/insideStats">Go deep</Link>
      <h2>Estadísticas</h2>
      <p>Aquí puedes ver las estadísticas.</p>
    </div>
  );
}
