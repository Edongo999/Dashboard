import { ChevronRight } from "lucide-react"

const users = [
  {
    name: "Sophie Martin",
    email: "sophie.m@example.com",
    avatar: "https://i.pravatar.cc/40?u=sophie",
    status: "Actif",
    date: "14 juin 2023"
  },
  {
    name: "Thomas Dubois",
    email: "thomas.d@example.com",
    avatar: "https://i.pravatar.cc/40?u=thomas",
    status: "En attente",
    date: "10 juin 2023"
  },
  {
    name: "Emma Petit",
    email: "emma.p@example.com",
    avatar: "https://i.pravatar.cc/40?u=emma",
    status: "Actif",
    date: "8 juin 2023"
  },
  {
    name: "Lucas Bernard",
    email: "lucas.b@example.com",
    avatar: "https://i.pravatar.cc/40?u=lucas",
    status: "Inactif",
    date: "5 juin 2023"
  }
]

const NewUsersTable = () => {
  return (
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
              {/* Avatar + nom + email */}
              <td className="flex items-center gap-3 py-2">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </td>

              {/* Statut en badge */}
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.status === "Actif"
                      ? "bg-green-100 text-green-600"
                      : user.status === "En attente"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {user.status}
                </span>
              </td>

              {/* Date d’inscription */}
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
  )
}

export default NewUsersTable
