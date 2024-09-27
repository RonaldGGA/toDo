"use client";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import StatsPage from "./stats/page";

export default function DashboardLayout({ children }) {
  const routeSegment = useSelectedLayoutSegment("children");
  const routeSegments = useSelectedLayoutSegments("children");
  console.log(routeSegment); //stats or settings
  console.log(routeSegments); //["stats"] or ["settings"] or ["stats", "insideStats"]
  //it gets all the routes depper after this one
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold p-5">Dashboard</h1>
      <nav className="m-5 flex flex-col gap-2">
        <a
          className="text-lg font-medium text-blue-500"
          href="/dashboard/stats">
          Estadísticas
        </a>
        <a
          className="text-lg font-medium text-blue-500"
          href="/dashboard/settings">
          Configuración
        </a>
      </nav>
      <div>
        {/* <StatsPage /> */}
        {children}
      </div>{" "}
      {/* Renderiza las secciones aquí */}
    </div>
  );
}
