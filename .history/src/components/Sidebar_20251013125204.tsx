import {
  LayoutDashboard,
  Users,
  CreditCard,
  Shield,
  LifeBuoy
} from "lucide-react"

const Sidebar = () => {
  return (
    <aside className="w-64 h-full bg-neutral text-neutral-content flex flex-col justify-between p-4">
      {/* Haut : logo + menu */}
      <div>
        {/* Logo + Titre */}
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">M</div>
          <span className="text-xl font-semibold">Money Admin</span>
        </div>

        {/* Menu */}
        <ul className="menu space-y-2">
          <li>
            <a className="flex items-center gap-2">
              <LayoutDashboard size={18} />
              <span>Tableau de bord</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2">
              <Users size={18} />
              <span>Utilisateurs</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2">
              <CreditCard size={18} />
              <span>Transactions</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2">
              <Shield size={18} />
              <span>Sécurité</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2">
              <LifeBuoy size={18} />
              <span>Support</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Bas : version */}
      <div className="text-xs text-neutral-content/70 mt-6">
        Version<br />
        <span className="font-semibold">Admin v1.0.0</span>
      </div>
    </aside>
  )
}

export default Sidebar
