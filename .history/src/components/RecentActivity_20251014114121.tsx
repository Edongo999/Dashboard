import { ChevronRight, Clock } from "lucide-react" // ✅ Seuls les icônes utilisés sont importés

const transactions = [
  {
    name: "Marie Dupont",
    type: "Dépôt",
    amount: "+1 200,00 €",
    color: "text-orange-500"
  },
  {
    name: "Jean Lefebvre",
    type: "Retrait",
    amount: "-450,00 €",
    color: "text-blue-500"
  },
  {
    name: "Camille Roux",
    type: "Retrait",
    amount: "-1 050,00 €",
    status: "En attente",
    color: "text-yellow-500"
  },
  {
    name: "Antoine Moreau",
    type: "Retrait",
    amount: "-2 500,00 €",
    color: "text-red-500"
  }
]

const users = [
  {
    name: "Sophie Martin",
    email: "sophie@example.com",
    status: "Actif",
    date: "14 juin 2023"
  },
  {
    name: "Thomas Dubois",
    email: "thomas@example.com",
    status: "En attente",
    date: "18 juin 2023"
  },
  {
    name: "Emma Petit",
    email: "emma@example.com",
    status: "Actif",
    date: "15 juin 2023"
  },
  {
    name: "Lucas Bernard",
    email: "lucas@example.com",
    status: "Inactif",
    date: "16 juin 2023"
  }
]

const RecentActivity = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Transactions récentes */}
      <div className="bg-white rounded-[12px] shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Transactions récentes</h2>
          <select className="text-sm bg-gray-100 px-3 py-1 rounded-md">
            <option>Ce mois</option>
            <option>Cette semaine</option>
            <option>Aujourd'hui</option>
          </select>
        </div>
        <ul className="space-y-4">
          {transactions.map((tx, i) => (
            <li key={i} className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-800">{tx.name}</p>
                <p className="text-xs text-gray-500">{tx.type}</p>
              </div>
              <div className="flex items-center gap-2">
                {tx.status === "En attente" && (
                  <Clock className="w-4 h-4 text-yellow-500" />
                )}
                <span className={`text-sm font-semibold ${tx.color}`}>
                  {tx.amount}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-right">
          <button className="text-sm text-blue-500 hover:underline flex items-center gap-1 ml-auto">
            Voir toutes les transactions <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Nouveaux utilisateurs */}
      <div className="bg-white rounded-[12px] shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Nouveaux utilisateurs</h2>
          <input
            type="text"
            placeholder="Rechercher..."
            className="text-sm bg-gray-100 px-3 py-1 rounded-md"
          />
        </div>
        <ul className="space-y-4">
          {users.map((user, i) => (
            <li key={i} className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-800">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <div className="text-right text-sm">
                <p
                  className={`font-semibold ${
                    user.status === "Actif"
                      ? "text-green-500"
                      : user.status === "En attente"
                      ? "text-yellow-500"
                      : "text-gray-400"
                  }`}
                >
                  {user.status}
                </p>
                <p className="text-xs text-gray-500">{user.date}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-right">
          <button className="text-sm text-blue-500 hover:underline flex items-center gap-1 ml-auto">
            Voir tous les utilisateurs <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecentActivity
