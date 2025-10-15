import { ArrowDownLeft, ArrowUpRight, ChevronRight } from "lucide-react"

const defaultAvatar = "https://i.pravatar.cc/40?u=default"

const transactions = [
  {
    name: "Marie Dupont",
    type: "Dépôt",
    amount: "+1 200,00 €",
    status: "Réussi"
  },
  {
    name: "Jean Lefebvre",
    type: "Retrait",
    amount: "-450,00 €",
    status: "Réussi"
  },
  {
    name: "Camille Roux",
    type: "Retrait",
    amount: "-1 050,00 €",
    status: "En attente"
  },
  {
    name: "Antoine Moreau",
    type: "Retrait",
    amount: "-2 500,00 €",
    status: "Réussi"
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
      {/* 🔶 Transactions récentes */}
      <div className="bg-white rounded-[12px] shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Transactions récentes</h2>
          <select className="text-sm bg-gray-100 px-3 py-1 rounded-md">
            <option>Ce mois</option>
            <option>Cette semaine</option>
            <option>Aujourd'hui</option>
          </select>
        </div>

        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-500">
              <th>Client</th>
              <th>Montant</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((tx, i) => (
              <tr key={i} className="text-gray-700">
                <td className="flex items-center gap-3 py-2">
                  <img
                    src={defaultAvatar}
                    alt={tx.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{tx.name}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      {tx.type === "Dépôt" && (
                        <ArrowDownLeft className="w-4 h-4 text-orange-500" />
                      )}
                      {tx.type === "Retrait" && (
                        <ArrowUpRight className="w-4 h-4 text-blue-500" />
                      )}
                      <span>{tx.type}</span>
                    </div>
                  </div>
                </td>
                <td className="text-right font-semibold">{tx.amount}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tx.status === "Réussi"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 text-right">
          <button className="text-sm text-blue-500 hover:underline flex items-center gap-1 ml-auto">
            Voir toutes les transactions <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 🔷 Nouveaux utilisateurs */}
      <div className="bg-white rounded-[12px] shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Nouveaux utilisateurs</h2>
          <input
            type="text"
            placeholder="Rechercher..."
            className="text-sm bg-gray-100 px-3 py-1 rounded-md"
          />
        </div>

        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-500">
              <th>Utilisateur</th>
              <th>Statut</th>
              <th>Inscription</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user, i) => (
              <tr key={i} className="text-gray-700">
                <td className="flex items-center gap-3 py-2">
                  <img
                    src={defaultAvatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === "Actif"
                        ? "bg-green-100 text-green-600"
                        : user.status === "En attente"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>{user.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

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
