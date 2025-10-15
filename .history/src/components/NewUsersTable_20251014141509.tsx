import { ChevronRight, Search, X } from "lucide-react"
import { useState } from "react"

// ✅ Liste des utilisateurs (tu peux ajouter le champ avatar si tu veux gérer les images)
const users = [
  {
    name: "Sophie Martin",
    email: "sophie.m@example.com",
    status: "Actif",
    date: "14 juin 2023",
    avatar: "/src/assets/images/sophie.jpg" // 👉 Tu insères tes propres images ici
  },
  {
    name: "Thomas Dubois",
    email: "thomas.d@example.com",
    status: "En attente",
    date: "10 juin 2023",
    avatar: "/src/assets/images/thomas.jpg"
  },
  {
    name: "Emma Petit",
    email: "emma.p@example.com",
    status: "Actif",
    date: "8 juin 2023",
    avatar: "/src/assets/images/emma.jpg"
  },
  {
    name: "Lucas Bernard",
    email: "lucas.b@example.com",
    status: "Inactif",
    date: "5 juin 2023",
    avatar: "/src/assets/images/lucas.jpg"
  }
]

const NewUsersTable = () => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)

  return (
    <div className="bg-white rounded-[12px] shadow-md p-6 w-full lg:max-w-[600px]">
      
      {/* ✅ Titre + barre de recherche sur la même ligne */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800 leading-tight">
          Nouveaux<br />utilisateurs
        </h2>
        <div className="relative w-[240px]">
          <input
            type="text"
            placeholder="Rechercher..."
            className="text-sm bg-gray-100 pl-8 pr-3 py-1 rounded-md w-full"
          />
          <Search className="absolute left-2 top-1.5 w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* ✅ Tableau avec animation et zoom image */}
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
                <tr
                  key={i}
                  className="text-gray-700 align-middle text-[16px] transition duration-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      {/* ✅ Avatar avec effet de zoom et icône d’indication */}
                      <div
                        className="relative group cursor-pointer"
                        onClick={() => setZoomedImage(user.avatar)}
                      >
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-8 h-8 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {/* ✅ Indicateur visuel au survol */}
                        <div className="absolute inset-0 rounded-full bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <span className="text-white text-xs">🔍</span>
                        </div>
                      </div>

                      {/* ✅ Nom + email */}
                      <div className="whitespace-nowrap">
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>

                  {/* ✅ Statut avec badge coloré */}
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

      {/* ✅ Bouton en bas */}
        <div className="mt-6 flex justify-center">
    <button className="text-base text-[#FF6600] font-medium hover:underline flex items-center gap-1">
        Voir tous les utilisateurs <ChevronRight className="w-4 h-4" style={{ color: "#FF6600" }} />
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

export default NewUsersTable
