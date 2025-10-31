import { ChevronRight, AlertTriangle, Clock } from "lucide-react"

// ✅ Définition des types pour sécuriser le code
type Priority = "Élevée" | "Moyenne" | "Basse"
type Status = "Ouvert" | "En cours"

type Ticket = {
  title: string
  user: string
  priority: Priority
  status: Status
  time: string
}

// ✅ Liste des tickets à afficher dans le tableau
const tickets: Ticket[] = [
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

// ✅ Couleurs associées à chaque priorité
const priorityStyles: Record<Priority, { bg: string; text: string }> = {
  Élevée: { bg: "#FECACA", text: "#DC2626" },
  Moyenne: { bg: "#FDE68A", text: "#854D0E" },
  Basse: { bg: "#DBEAFE", text: "#2563EB" }
}

const SupportTickets = () => {
  return (
    <div className="bg-white rounded-[12px] shadow-md p-4 sm:p-6 w-full max-w-full">
      {/* Titre + filtres */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
        <h2 className="text-lg font-bold text-gray-800">Tickets de support</h2>

        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-100">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span className="text-sm text-red-600 font-semibold">Élevée: 1</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{ backgroundColor: "#FDE68A" }}>
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#854D0E" }}></span>
            <span className="text-sm font-semibold" style={{ color: "#854D0E" }}>Moyenne: 4</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span className="text-sm text-blue-600 font-semibold">Basse: 12</span>
          </div>
        </div>
      </div>

      {/* Tableau responsive */}
      <div className="overflow-x-auto">
        <table className="min-w-full w-full text-[15px] text-left border-collapse">
          <thead className="hidden sm:table-header-group">
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
              const { bg, text } = priorityStyles[ticket.priority]
              const statusIcon =
                ticket.status === "Ouvert"
                  ? <AlertTriangle className="w-4 h-4 mr-1" style={{ color: "#DC2626" }} />
                  : <Clock className="w-4 h-4 mr-1" style={{ color: "#854D0E" }} />

              return (
                <tr key={i} className="text-gray-700 text-[16px] transition duration-200 hover:bg-gray-50 block sm:table-row">
                  {/* Ticket info */}
                  <td className="py-2 px-3 block sm:table-cell">
                    <p className="font-semibold">{ticket.title}</p>
                    <p className="text-xs text-gray-500">{ticket.user}</p>
                  </td>

                  {/* Priorité */}
                  <td className="py-2 px-3 text-center block sm:table-cell">
                    <span
                      className="px-2 py-1 rounded-full text-xs font-semibold inline-block mt-1 sm:mt-0"
                      style={{ backgroundColor: bg, color: text }}
                    >
                      {ticket.priority}
                    </span>
                  </td>

                  {/* Statut */}
                  <td className="py-2 px-3 text-center block sm:table-cell">
                    <span className="inline-flex items-center gap-1 text-sm text-gray-700 font-medium mt-1 sm:mt-0">
                      {statusIcon}
                      {ticket.status}
                    </span>
                  </td>

                  {/* Temps */}
                  <td className="py-2 px-3 text-center text-sm text-gray-600 block sm:table-cell">
                    <span className="inline-flex items-center justify-center gap-1 mt-1 sm:mt-0">
                      <Clock className="w-4 h-4" style={{ color: "#4B5563" }} />
                      {ticket.time}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-2 px-3 text-center block sm:table-cell">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-1 sm:mt-0">
                      <button className="text-sm font-medium hover:underline" style={{ color: "#FF6600" }}>Répondre</button>
                      <button className="text-sm text-gray-600 hover:underline font-medium">Assigner</button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Bouton bas */}
      <div className="mt-6 flex justify-center">
        <button className="text-base text-[#FF6600] font-medium hover:underline flex items-center gap-1">
          Voir tous les tickets <ChevronRight className="w-4 h-4" style={{ color: "#FF6600" }} />
        </button>
      </div>
    </div>
  )
}

export default SupportTickets



