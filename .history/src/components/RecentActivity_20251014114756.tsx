import { ChevronRight } from "lucide-react"

const transactions = [
  {
    client: "Marie Dupont",
    type: "Dépôt",
    amount: "+1 200,00 €",
    status: "Réussi"
  },
  {
    client: "Jean Lefebvre",
    type: "Retrait",
    amount: "-450,00 €",
    status: "Réussi"
  },
  {
    client: "Camille Roux",
    type: "Transfert",
    amount: "-1 050,00 €",
    status: "En attente"
  },
  {
    client: "Antoine Moreau",
    type: "Dépôt",
    amount: "+2 500,00 €",
    status: "Réussi"
  }
]

const users = [
  {
    name: "Sophie Martin",
    email: "sophie.m@example.com",
    status: "Actif",
    date: "14 juin 2023"
  },
  {
    name: "Thomas Dubois",
    email: "thomas.d@example.com",
    status: "En attente",
    date: "10 juin 2023"
  },
  {
    name: "Emma Petit",
    email: "emma.p@example.com",
    status: "Actif",
    date: "8 juin 2023"
  },
  {
    name: "Lucas Bernard",
    email: "lucas.b@example.com",
    status: "Inactif",
    date: "5 juin 2023"
  }
]

const RecentActivity = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* ✅ Transactions récentes */}
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
                <td>
                  <p className="font-medium">{tx.client}</p>
                  <p className="text-xs text-gray-500">{tx.type}</p>
                </td>
                <td className="text-right font-semibold">
                  {tx.amount}
                </td>
                <td>
                  <span
                    className={`text-sm font-medium ${
                      tx.status === "Réussi"
                        ? "text-green-500"
                        : "text-yellow-500"
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

      {/* ✅ Nouveaux utilisateurs */}
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
                <td>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </td>
                <td>
                  <span
                    className={`text-sm font-medium ${
                      user.status === "Actif"
                        ? "text-green-500"
                        : user.status === "En attente"
                        ? "text-yellow-500"
                        : "text-gray-400"
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
