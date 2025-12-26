import { useEffect, useState } from "react";
import { api } from "../services/api";
import { StatsCards } from "../components/dashboard/StatsCards";

export const Dashboard = () => {
  const [stats, setStats] = useState({ balance: 0, income: 0, expense: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca dados do backend
    api
      .get("/dashboard/stats")
      .then((response) => {
        setStats(response.data);
      })
      .catch((err) => console.error("Erro ao buscar dados", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-white">Carregando dados...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Visão Geral</h1>
      <StatsCards data={stats} />

      {/* Espaço para o Gráfico que faremos em seguida */}
      <div className="h-64 bg-neo-card/30 rounded-2xl border border-white/5 flex items-center justify-center text-gray-500">
        Área do Gráfico de Receita vs Despesa
      </div>
    </div>
  );
};
