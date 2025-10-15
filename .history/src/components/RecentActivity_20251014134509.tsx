import { ChevronRight, ArrowUp, ArrowDown, X } from "lucide-react"
import { useState } from "react"

// ✅ Liste des transactions avec images locales
const transactions = [
  {
    name: "Marie Dupont",
    type: "Dépôt",
    amount: "+1 200,00 €",
    status: "Réussi",
    avatar: "/src/assets/images/landry.png"
  },
  {
    name: "Jean Lefebvre",
    type: "Retrait",
    amount: "-450,00 €",
    status: "Réussi",
    avatar: "/assets/jean.jpg"
  },
  {
    name: "Camille Roux",
    type: "Transfert",
    amount: "-1 050,00 €",
    status: "En attente",
    avatar: "/assets/camille.jpg"
  },
  {
    name: "Antoine Moreau",
    type: "Dépôt",
    amount: "+2 500,00 €",
    status: "Réussi",
    avatar: "/assets/antoine.jpg"
  }
]

const RecentActivity = () => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)

  return (
    <div className="bg-white rounded-[12px] shadow-md p-6 w-full lg:max-w-[600px]">
      
      {/* ✅ Titre + filtre */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base lg:text-lg font-bold text-gray-800">Transactions récentes</h2>
        <select className="text-xs lg:text-sm bg-gray-100 px-3 py-1 rounded-md">
          <option>Ce mois</option>
          <option>Cette semaine</option>
          <option>Aujourd'hui</option>
        </select>
      </div>

      {/* ✅ Tableau responsive */}
      <div className="overflow-x-auto">
        <table className="min-w-[500px] w-full text-[13px] lg:text-[14px] text-left">
          <thead>
            <tr className="bg-[#F9FAFB] text-gray-500 font-normal">
              <th className="py-2 px-4">Client</th>
              <th className="py-2 px-20 text-center">Montant</th>
              <th className="py-2 px-4 text-center">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((tx, i) => {
              const isDeposit = tx.type === "Dépôt"
              const arrowColor = isDeposit ? "#FF6600" : "#1F2937"
              const amountColor = isDeposit ? "text-[#FF6600]" : "text-[#1F2937]"
              const ArrowIcon = tx.status === "Réussi" ? ArrowUp : ArrowDown

              return (
                <tr key={i} className="text-gray-700 align-middle">
                  
                  {/* ✅ Client avec image cliquable + nom non cassable */}
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <button onClick={() => setZoomedImage(tx.avatar)}>
                        <img
                          src={tx.avatar}
                          alt={tx.name}
                          className="w-8 h-8 rounded-full object-cover hover:scale-105 transition-transform"
                        />
                      </button>
                      <div className="whitespace-nowrap">
                        <p className="font-medium">{tx.name}</p>
                        <p className="text-xs text-gray-500">{tx.type}</p>
                      </div>
                    </div>
                  </td>

                  {/* ✅ Montant bien reculé et non cassable */}
                  <td className="py-3 px-20 text-center">
                    <div className="inline-flex items-center justify-center gap-2 h-6">
                      <ArrowIcon
                        className="w-4 h-4 font-bold shrink-0"
                        style={{ color: arrowColor }}
                      />
                      <span className={`font-semibold ${amountColor} min-w-[100px] whitespace-nowrap`}>
                        {tx.amount}
                      </span>
                    </div>
                  </td>

                  {/* ✅ Statut avec badge */}
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

      {/* ✅ Bouton en bas */}
      <div className="mt-6 flex justify-center">
        <button className="text-xs lg:text-sm text-[#FF6600] hover:underline flex items-center gap-1">
          Voir toutes les transactions <ChevronRight className="w-4 h-4" style={{ color: "#FF6600" }} />
        </button>
      </div>

      {/* ✅ Modal zoom image */}
      {zoomedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg p-4 shadow-lg max-w-sm w-full">
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={zoomedImage}
              alt="Zoom"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default RecentActivity
