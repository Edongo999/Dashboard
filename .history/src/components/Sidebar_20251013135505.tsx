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

          <ul className="menu space-y-2">
            <li><a className="flex items-center gap-2"><LayoutDashboard size={18} />Tableau de bord</a></li>
            <li><a className="flex items-center gap-2"><Users size={18} />Utilisateurs</a></li>
            <li><a className="flex items-center gap-2"><CreditCard size={18} />Transactions</a></li>
            <li><a className="flex items-center gap-2"><Shield size={18} />Sécurité</a></li>
            <li><a className="flex items-center gap-2"><LifeBuoy size={18} />Support</a></li>
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
