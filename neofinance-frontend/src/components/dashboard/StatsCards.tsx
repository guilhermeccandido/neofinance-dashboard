import { ArrowUpCircle, ArrowDownCircle, Wallet } from "lucide-react";

interface StatsProps {
  balance: number;
  income: number;
  expense: number;
}

export const StatsCards = ({ data }: { data: StatsProps }) => {
  const formatMoney = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Saldo Total */}
      <div className="bg-neo-card/80 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-300">
          <Wallet size={80} />
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
            <Wallet size={24} />
          </div>
          <span className="text-gray-400 font-medium">Saldo Total</span>
        </div>
        <h3 className="text-3xl font-bold text-white">
          {formatMoney(data.balance)}
        </h3>
      </div>

      {/* Entradas */}
      <div className="bg-neo-card/80 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-300">
          <ArrowUpCircle size={80} className="text-neo-success" />
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-neo-success/20 rounded-lg text-neo-success">
            <ArrowUpCircle size={24} />
          </div>
          <span className="text-gray-400 font-medium">Entradas</span>
        </div>
        <h3 className="text-3xl font-bold text-neo-success">
          {formatMoney(data.income)}
        </h3>
      </div>

      {/* Saídas */}
      <div className="bg-neo-card/80 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-300">
          <ArrowDownCircle size={80} className="text-neo-danger" />
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-neo-danger/20 rounded-lg text-neo-danger">
            <ArrowDownCircle size={24} />
          </div>
          <span className="text-gray-400 font-medium">Saídas</span>
        </div>
        <h3 className="text-3xl font-bold text-neo-danger">
          {formatMoney(data.expense)}
        </h3>
      </div>
    </div>
  );
};
