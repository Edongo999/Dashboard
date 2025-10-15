import { ChevronRight, ArrowUp, ArrowDown, X } from "lucide-react"
import { useState } from "react"

// ✅ Liste des transactions avec tes images locales
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
    avatar: "/src/assets/images/landry1.png"
  },
  {
    name: "Camille Roux",
    type: "Transfert",
    amount: "-1 050,00 €",
    status: "En attente",
    avatar: "/src/assets/images/landry2.png"
  },
  {
    name: "Antoine Moreau",
    type: "Dépôt",
    amount: "+2 500,00 €",
    status: "Réussi",
    avatar: "/src/assets/images/landry3.png"
  }
]

const RecentActivity = () => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)

  return (
    <div className="bg-white rounded-[12px] shadow-md p-6 w-full lg:max-w-[600px] min-h-[360px]">
      
      {/* ✅ Titre + filtre de période */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">Transactions récentes</h2>
        <select className="text-sm bg-gray-100 px-3 py-1 rounded-md">
          <option>Ce mois</option>
          <option>Cette semaine</option>
          <option>Aujourd'hui</option>
        </select>
      </div>

      {/* ✅ Tableau avec animation et zoom image */}
      <div className="w-full">
        <table className="table-fixed w-full text-[15px] text-left">
          <thead>
            <tr className="bg-[#F9FAFB] text-gray-500 font-normal">
              <th className="py-2 px-3 w-[45%]">Client</th>
              <th className="py-2 px-3 w-[30%] text-center">Montant</th>
              <th className="py-2 px-3 w-[25%] text-center">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((tx, i) => {
              const isDeposit = tx.type === "Dépôt"
              const arrowColor = isDeposit ? "#FF6600" : "#1F2937"
              const amountColor = isDeposit ? "text-[#FF6600]" : "text-[#1F2937]"
              const ArrowIcon = tx.status === "Réussi" ? ArrowUp : ArrowDown

              return (
                <tr
                  key={i}
                  className="text-gray-700 align-middle text-[16px] transition duration-200 hover:bg-gray-50"
                >
                  {/* ✅ Client avec image zoomable + effet visuel au survol */}
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="relative group cursor-pointer"
                        onClick={() => setZoomedImage(tx.avatar)}
                      >
                        <img
                          src={tx.avatar}
                          alt={tx.name}
                          className="w-8 h-8 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {/* ✅ Icône 🔍 qui apparaît au survol */}
                        <div className="absolute inset-0 rounded-full bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <span className="text-white text-xs">🔍</span>
                        </div>
                      </div>

                      {/* ✅ Nom + type de transaction */}
                      <div className="whitespace-nowrap">
                        <p className="font-medium">{tx.name}</p>
                        <p className="text-xs text-gray-500">{tx.type}</p>
                      </div>
                    </div>
                  </td>

                  {/* ✅ Montant avec flèche + couleur dynamique */}
                  <td className="py-3 px-3 text-center">
                    <div className="inline-flex items-center justify-center gap-2 h-6">
                      <ArrowIcon
                        className="w-4 h-4 font-bold shrink-0"
                        style={{ color: arrowColor }}
                      />
                      <span className={`font-semibold ${amountColor} whitespace-nowrap`}>
                        {tx.amount}
                      </span>
                    </div>
                  </td>

                  {/* ✅ Statut avec badge coloré */}
                  <td className="py-3 px-3 text-center">
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
        <button className="text-base text-[#FF6600] font-medium hover:underline flex items-center gap-1">
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
