import { ChevronRight, Search } from "lucide-react"

// ✅ Liste des utilisateurs simulés
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

const NewUsers = () => {
  return (
    <div className="bg-white rounded-[12px] shadow-md p-6 w-full lg:max-w-[600px]">
      
      {/* ✅ Titre et barre de recherche */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">Nouveaux utilisateurs</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher..."
            className="text-sm bg-gray-100 pl-8 pr-3 py-1 rounded-md"
          />
          <Search className="absolute left-2 top-1.5 w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* ✅ Tableau responsive */}
      <div className="overflow-x-auto">
        <table className="min-w-[500px] w-full text-[15px] text-left">
          <thead>
            <tr className="bg-[#F9FAFB] text-gray-500 font-normal">
              <th className="py-2 px-4">Utilisateur</th>
              <th className="py-2 px-4 text-center">Statut</th>
              <th className="py-2 px-4 text-center">Inscription</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user, i) => {
              const statusColor =
                user.status === "Actif"
                  ? "bg-green-100 text-green-600"
                  : user.status === "En attente"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-gray-100 text-gray-500"

              return (
                <tr key={i} className="text-gray-700 align-middle text-[16px]">
                  
                  {/* ✅ Nom + email + icône */}
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">👤</span>
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>

                  {/* ✅ Statut avec badge */}
                  <td className="py-3 px-4 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}>
                      {user.status}
                    </span>
                  </td>

                  {/* ✅ Date d’inscription */}
                  <td className="py-3 px-4 text-center">
                    <span className="text-sm text-gray-600">{user.date}</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* ✅ Lien en bas */}
      <div className="mt-6 flex justify-center">
        <button className="text-sm text-[#FF6600] hover:underline flex items-center gap-1">
          Voir tous les utilisateurs <ChevronRight className="w-4 h-4" style={{ color: "#FF6600" }} />
        </button>
      </div>
    </div>
  )
}

export default NewUsers
