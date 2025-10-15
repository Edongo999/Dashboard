// src/App.jsx
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import StatCard from './components/StatCard';
import TransactionsTable from './components/TransactionsTable';
import { Users, DollarSign, TrendingUp, UserPlus } from "lucide-react";

const App = () => {
  const stats = [
    { title: "Utilisateurs actifs", value: "24,001", icon: <Users className="h-6 w-6 text-primary"/> },
    { title: "Revenus", value: "1,285,000€", icon: <DollarSign className="h-6 w-6 text-green-500"/> },
    { title: "Dépenses", value: "4,563,021€", icon: <TrendingUp className="h-6 w-6 text-red-500"/> },
    { title: "Nouveaux utilisateurs", value: "97", icon: <UserPlus className="h-6 w-6 text-blue-500"/> },
  ];

  const transactions = [
    { date: "13/10/2025", nom: "Jean Dupont", montant: "120€", statut: "Validé", type: "Paiement" },
    { date: "12/10/2025", nom: "Alice Mbappe", montant: "250€", statut: "En attente", type: "Virement" },
  ];

  return (
    <div data-theme="cupcake" className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 bg-base-100 flex-1">
          <h2 className="text-2xl font-bold mb-4">Tableau de bord administrateur</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((s, i) => <StatCard key={i} {...s} />)}
          </div>

          <h3 className="text-xl font-semibold mb-2">Transactions en temps réel</h3>
          <TransactionsTable data={transactions} />
        </main>
      </div>
    </div>
  );
};

export default App;
