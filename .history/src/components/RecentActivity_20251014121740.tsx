import { ChevronRight, ArrowUp, ArrowDown } from "lucide-react"

const avatarUrl = "/images/avatar-maquette.png" // ✅ Remplace par ton image réelle

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
    type: "Transfert",
    amount: "-1 050,00 €",
    status: "En attente"
  },
  {
    name: "Antoine Moreau",
    type: "Dépôt",
    amount: "+2 500,00 €",
    status: "Réussi"
  }
]

const RecentActivity = () => {
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
          {transactions.map((tx, i) => {
            const isDeposit = tx.type === "Dépôt"
            const arrowColor = isDeposit ? "#FF6600" : "#1F2937"
            const amountColor = isDeposit ? "text-[#FF6600]" : "text-[#1F2937]"
            const ArrowIcon = tx.status === "Réussi" ? ArrowUp : ArrowDown

            return (
              <tr key={i} className="text-gray-700">
                {/* Client + avatar + type */}
                <td className="flex items-center gap-3 py-2">
                  <img
                    src={avatarUrl}
                    alt={tx.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{tx.name}</p>
                    <p className="text-xs text-gray-500">{tx.type}</p>
                  </div>
                </td>

                {/* Montant + flèche stylisée */}
                <td className="text-right flex items-center justify-end gap-2">
                  <ArrowIcon
                    className="w-4 h-4 font-bold"
                    style={{ color: arrowColor, fontWeight: "bold" }}
                  />
                  <span className={`font-semibold ${amountColor}`}>{tx.amount}</span>
                </td>

                {/* Statut en badge */}
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
            )
          })}
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

export default RecentActivity
