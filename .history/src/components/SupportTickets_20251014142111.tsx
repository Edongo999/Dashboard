import { ChevronRight } from "lucide-react"

const tickets = [
  {
    title: "Problème de virement international",
    user: "Claire Dubois",
    priority: "Élevée",
    status: "Ouvert",
    time: "il y a 2h"
  },
  {
    title: "Carte refusée lors d’un achat",
    user: "Michel Leroy",
    priority: "Moyenne",
    status: "En cours",
    time: "il y a 5h"
  },
  {
    title: "Demande de changement de limite",
    user: "Aurélie Martin",
    priority: "Basse",
    status: "En cours",
    time: "il y a 1j"
  }
]

const SupportTickets = () => {
  return (
    <div className="bg-white rounded-[12px] shadow-md p-6 w-full lg:max-w-[700px]">
      
      {/* ✅ Titre principal */}
      <h2 className="text-lg font-bold text-gray-800 mb-4">Tickets de support</h2>

      {/* ✅ Tableau des tickets */}
      <div className="overflow-x-auto">
        <table className="w-full text-[15px] text-left table-fixed">
          <thead>
            <tr className="bg-[#F9FAFB] text-gray-500 font-normal">
              <th className="py-2 px-3 w-[35%]">Ticket</th>
              <th className="py-2 px-3 w-[15%] text-center">Priorité</th>
              <th className="py-2 px-3 w-[15%] text-center">Statut</th>
              <th className="py-2 px-3 w-[15%] text-center">Temps</th>
              <th className="py-2 px-3 w-[20%] text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tickets.map((ticket, i) => {
              const priorityColor =
                ticket.priority === "Élevée"
                  ? "text-red-600"
                  : ticket.priority === "Moyenne"
                  ? "text-yellow-600"
                  : "text-green-600"

              const statusColor =
                ticket.status === "Ouvert"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-yellow-100 text-yellow-600"

              return (
                <tr
                  key={i}
                  className="text-gray-700 text-[16px] transition duration-200 hover:bg-gray-50"
                >
                  {/* ✅ Ticket + nom */}
                  <td className="py-3 px-3">
                    <p className="font-semibold">{ticket.title}</p>
                    <p className="text-xs text-gray-500">{ticket.user}</p>
                  </td>

                  {/* ✅ Priorité colorée */}
                  <td className={`py-3 px-3 text-center font-medium ${priorityColor}`}>
                    {ticket.priority}
                  </td>

                  {/* ✅ Statut avec badge */}
                  <td className="py-3 px-3 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}>
                      {ticket.status}
                    </span>
                  </td>

                  {/* ✅ Temps */}
                  <td className="py-3 px-3 text-center text-sm text-gray-600">
                    {ticket.time}
                  </td>

                  {/* ✅ Actions */}
                  <td className="py-3 px-3 text-center">
                    <button className="text-sm text-blue-600 hover:underline mr-2">Répondre</button>
                    <button className="text-sm text-gray-600 hover:underline">Assigner</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* ✅ Bouton "Voir tous les tickets" bien visible */}
      <div className="mt-6 flex justify-center">
        <button className="text-base text-[#FF6600] font-medium hover:underline flex items-center gap-1">
          Voir tous les tickets <ChevronRight className="w-4 h-4" style={{ color: "#FF6600" }} />
        </button>
      </div>
    </div>
  )
}

export default SupportTickets
