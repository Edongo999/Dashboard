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
    { label: "Tableau de bord", icon: <LayoutDashboard size={20} /> },
    { label: "Utilisateurs", icon: <Users size={20} /> },
    { label: "Transactions", icon: <CreditCard size={20} /> },
    { label: "Sécurité", icon: <Shield size={20} /> },
    { label: "Support", icon: <LifeBuoy size={20} /> }
  ]

  // ✅ Contenu du menu (réutilisé pour mobile + desktop)
  const renderMenu = () => (
    <>
      {/* ✅ Logo + titre */}
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm shrink-0">
          M
        </div>
        <span className="text-xl font-semibold whitespace-nowrap">Money Admin</span>
      </div>

      {/* ✅ Menu principal */}
      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a
              onClick={() => setActive(item.label)}
              className={`flex items-center gap-4 py-3 px-3 text-[16px] rounded-md transition-all duration-300 ${
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
    </>
  )

  return (
    <>
      {/* ✅ Bouton hamburger mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md"
        onClick={() => setOpen(!open)}
      >
        <Menu className="text-gray-800" />
      </button>

      {/* ✅ Sidebar mobile en overlay */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-[#656A74] text-neutral-content p-4 z-40 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>{renderMenu()}</div>
          <div className="mt-10">
            <div className="bg-[#3A3A3A] rounded-md px-4 py-3 text-xs text-neutral-content/70">
              <p className="mb-1">Version</p>
              <span className="font-semibold text-sm text-white">Admin v1.0.0</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ✅ Sidebar desktop avec hauteur fixe */}
      <aside className="hidden lg:flex flex-col w-64 h-[990px] bg-[#656A74] text-neutral-content p-4">
        <div>{renderMenu()}</div>
        <div className="mt-[440px]">
          <div className="bg-[#3A3A3A] rounded-md px-4 py-3 text-xs text-neutral-content/70">
            <p className="mb-1">Version</p>
            <span className="font-semibold text-sm text-white">Admin v1.0.0</span>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
