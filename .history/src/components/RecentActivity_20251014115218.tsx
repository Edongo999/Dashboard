import { ArrowDownLeft, ArrowUpRight, ChevronRight } from "lucide-react"

const transactions = [
  {
    name: "Marie Dupont",
    avatar: "https://i.pravatar.cc/40?u=marie",
    type: "Dépôt",
    amount: "+1 200,00 €",
    status: "Réussi"
  },
  {
    name: "Jean Lefebvre",
    avatar: "https://i.pravatar.cc/40?u=jean",
    type: "Retrait",
    amount: "-450,00 €",
    status: "Réussi"
  },
  {
    name: "Camille Roux",
    avatar: "https://i.pravatar.cc/40?u=camille",
    type: "Transfert",
    amount: "-1 050,00 €",
    status: "En attente"
  },
  {
    name: "Antoine Moreau",
    avatar: "https://i.pravatar.cc/40?u=antoine",
    type: "Dépôt",
    amount: "+2 500,00 €",
    status: "Réussi"
  }
]

const RecentTransactionsTable = () => {
  return (
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
              {/* Client + avatar + type + flèche */}
              <td className="flex items-center gap-3 py-2">
                <img
                  src={tx.avatar}
                  alt={tx.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{tx.name}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    {tx.type === "Dépôt" && (
                      <ArrowDownLeft className="w-4 h-4 text-green-500" />
                    )}
                    {tx.type === "Retrait" && (
                      <ArrowUpRight className="w-4 h-4 text-red-500" />
                    )}
                    {tx.type === "Transfert" && (
                      <ArrowUpRight className="w-4 h-4 text-yellow-500 rotate-45" />
                    )}
                    <span>{tx.type}</span>
                  </div>
                </div>
              </td>

              {/* Montant */}
              <td className="text-right font-semibold">{tx.amount}</td>

              {/* Statut avec badge */}
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
  )
}

export default RecentTransactionsTable
