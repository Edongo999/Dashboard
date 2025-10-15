
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Shield,
  LifeBuoy,
  Menu,
  XIcon
} from "lucide-react"
import { useState } from "react"

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState("Tableau de bord")

  const menuItems = [
    { label: "Tableau de bord", icon: <LayoutDashboard size={20} /> },
    { label: "Utilisateurs", icon: <Users size={20} /> },
    { label: "Transactions", icon: <CreditCard size={20} /> },
    { label: "Sécurité", icon: <Shield size={20} /> },
    { label: "Support", icon: <LifeBuoy size={20} /> }
  ]

  const renderMenu = () => (
    <>
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm shrink-0">
          M
        </div>
        <span className="text-xl font-semibold whitespace-nowrap">Money Admin</span>
      </div>

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
        onClick={() => setMobileOpen(true)}
      >
        <Menu className="text-gray-800" />
      </button>

      {/* ✅ Overlay mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ✅ Sidebar mobile avec bouton de fermeture */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-[#656A74] text-neutral-content p-4 z-50 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-end mb-4">
          <button onClick={() => setMobileOpen(false)}>
            <XIcon className="text-white" />
          </button>
        </div>
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

      {/* ✅ Sidebar desktop avec hauteur personnalisable */}
      <aside className="hidden lg:flex flex-col w-64 h-[970px] bg-[#656A74] text-neutral-content p-4">
        <div className="flex flex-col justify-between h-full">
          <div>{renderMenu()}</div>
          <div className="mt-auto">
            <div className="bg-[#3A3A3A] rounded-md px-4 py-3 text-xs text-neutral-content/70">
              <p className="mb-1">Version</p>
              <span className="font-semibold text-sm text-white">Admin v1.0.0</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
