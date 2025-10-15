import { ChevronRight, ArrowUp, ArrowDown } from "lucide-react"

// ✅ Liste des transactions avec avatars hébergés sur Unsplash (fiables)
const transactions = [
  {
    name: "Marie Dupont",
    type: "Dépôt",
    amount: "+1 200,00 €",
    status: "Réussi",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Jean Lefebvre",
    type: "Retrait",
    amount: "-450,00 €",
    status: "Réussi",
    avatar: "https://images.unsplash.com/photo-1603415526960-f8f0a1f0b4c6?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Camille Roux",
    type: "Transfert",
    amount: "-1 050,00 €",
    status: "En attente",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80"
  },
  {
    name: "Antoine Moreau",
    type: "Dépôt",
    amount: "+2 500,00 €",
    status: "Réussi",
    avatar: "https://images.unsplash.com/photo-1502767089025-6572583495b4?auto=format&fit=crop&w=80&q=80"
  }
]

const RecentActivity = () => {
  return (
    // ✅ Conteneur principal avec fond blanc, ombre, padding et largeur max
    <div className="bg-white rounded-[12px] shadow-md p-6 w-full lg:max-w-[600px]">
      
      {/* ✅ Titre et filtre de période */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">Transactions récentes</h2>
        <select className="text-sm bg-gray-100 px-3 py-1 rounded-md">
          <option>Ce mois</option>
          <option>Cette semaine</option>
          <option>Aujourd'hui</option>
        </select>
      </div>

      {/* ✅ Tableau responsive avec scroll horizontal si nécessaire */}
      <div className="overflow-x-auto">
        <table className="min-w-[500px] w-full text-[15px] text-left">
          <thead>
            <tr className="bg-[#F9FAFB] text-gray-500 font-normal">
              <th className="py-2 px-4">Client</th>
              <th className="py-2 px-20 text-center">Montant</th> {/* ✅ Montant reculé */}
              <th className="py-2 px-4 text-center">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((tx, i) => {
              // ✅ Détection du type pour couleur
              const isDeposit = tx.type === "Dépôt"
              const arrowColor = isDeposit ? "#FF6600" : "#1F2937"
              const amountColor = isDeposit ? "text-[#FF6600]" : "text-[#1F2937]"
              const ArrowIcon = tx.status === "Réussi" ? ArrowUp : ArrowDown

              return (
                <tr key={i} className="text-gray-700 align-middle text-[16px]">
                  
                  {/* ✅ Colonne Client avec avatar + nom + type */}
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={tx.avatar} // ✅ Avatar réaliste hébergé sur Unsplash
                        alt={tx.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">{tx.name}</p>
                        <p className="text-xs text-gray-500">{tx.type}</p>
                      </div>
                    </div>
                  </td>

                  {/* ✅ Colonne Montant avec flèche + valeur alignées */}
                  <td className="py-3 px-20 text-center">
                    <div className="inline-flex items-center justify-center gap-2 h-6">
                      <ArrowIcon
                        className="w-4 h-4 font-bold shrink-0"
                        style={{ color: arrowColor, fontWeight: "bold" }}
                      />
                      <span className={`font-semibold ${amountColor} min-w-[100px] whitespace-nowrap`}>
                        {tx.amount} {/* ✅ Ne se casse plus à la ligne */}
                      </span>
                    </div>
                  </td>

                  {/* ✅ Colonne Statut avec badge coloré */}
                  <td className="py-3 px-4 text-center">
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
      </div>

      {/* ✅ Bouton en bas du tableau */}
      <div className="mt-6 flex justify-center">
        <button className="text-sm text-[#FF6600] hover:underline flex items-center gap-1">
          Voir toutes les transactions <ChevronRight className="w-4 h-4" style={{ color: "#FF6600" }} />
        </button>
      </div>
    </div>
  )
}

export default RecentActivity
