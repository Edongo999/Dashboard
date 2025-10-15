import { ChevronRight, ArrowUp, ArrowDown, X } from "lucide-react"
import { useState } from "react"

// ✅ Transactions avec tes images locales
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
    <div className="bg-white rounded-[12px] shadow-md p-4 w-full lg:max-w-[600px]">
      
      {/* ✅ Titre + filtre */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-base font-bold text-gray-800">Transactions récentes</h2>
        <select className="text-xs bg-gray-100 px-2 py-1 rounded-md">
          <option>Ce mois</option>
          <option>Cette semaine</option>
          <option>Aujourd'hui</option>
        </select>
      </div>

      {/* ✅ Tableau compact sans scroll */}
      <div className="overflow-x-auto">
        <table className="w-full text-[13px] text-left">
          <thead>
            <tr className="bg-[#F9FAFB] text-gray-500 font-normal">
              <th className="py-1.5 px-3">Client</th>
              <th className="py-1.5 px-6 text-center">Montant</th>
              <th className="py-1.5 px-3 text-center">Statut</th>
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
                  
                  {/* ✅ Client avec image zoomable + nom non cassable */}
                  <td className="py-2 px-3">
                    <div className="flex items-center gap-2">
                      <button onClick={() => setZoomedImage(tx.avatar)}>
                        <img
                          src={tx.avatar}
                          alt={tx.name}
                          className="w-7 h-7 rounded-full object-cover hover:scale-105 transition-transform"
                        />
                      </button>
                      <div className="whitespace-nowrap">
                        <p className="font-medium leading-tight">{tx.name}</p>
                        <p className="text-[11px] text-gray-500">{tx.type}</p>
                      </div>
                    </div>
                  </td>

                  {/* ✅ Montant compact et non cassable */}
                  <td className="py-2 px-6 text-center">
                    <div className="inline-flex items-center justify-center gap-1 h-5">
                      <ArrowIcon
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ color: arrowColor }}
                      />
                      <span className={`font-semibold ${amountColor} min-w-[80px] whitespace-nowrap`}>
                        {tx.amount}
                      </span>
                    </div>
                  </td>

                  {/* ✅ Statut badge compact */}
                  <td className="py-2 px-3 text-center">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${
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

      {/* ✅ Bouton bas */}
      <div className="mt-4 flex justify-center">
        <button className="text-xs text-[#FF6600] hover:underline flex items-center gap-1">
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
