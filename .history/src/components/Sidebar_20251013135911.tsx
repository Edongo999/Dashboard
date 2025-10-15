import {
  LayoutDashboard,
  Users,
  CreditCard,
  Shield,
  LifeBuoy,
  Menu
} from "lucide-react"
import { useState } from "react"

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("Tableau de bord")

  const menuItems = [
    { label: "Tableau de bord", icon: <LayoutDashboard size={18} /> },
    { label: "Utilisateurs", icon: <Users size={18} /> },
    { label: "Transactions", icon: <CreditCard size={18} /> },
    { label: "Sécurité", icon: <Shield size={18} /> },
    { label: "Support", icon: <LifeBuoy size={18} /> }
  ]

  return (
    <>
      {/* Bouton hamburger mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md"
        onClick={() => setOpen(!open)}
      >
        <Menu className="text-gray-800" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 h-screen bg-[#656A74] text-neutral-content flex flex-col justify-between p-4 z-40 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:block`}
        style={{ opacity: 1 }}
      >
        {/* Haut : logo + menu */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-500 text-white rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm shrink-0">
              M
            </div>
            <span className="text-lg font-semibold whitespace-nowrap">Money Admin</span>
          </div>

          <ul className="menu space-y-1">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  onClick={() => setActive(item.label)}
                  className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all duration-300 ${
                    active === item.label
                      ? "bg-[#3A3A3A]"
                      : "hover:bg-neutral-600 hover:scale-[1.02]"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bas : version */}
        <div className="text-xs text-neutral-content/70 mt-6">
          Version<br />
          <span className="font-semibold">Admin v1.0.0</span>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
