import {
  LayoutDashboard,
  Users,
  CreditCard,
  Shield,
  LifeBuoy
} from "lucide-react"

const Sidebar = () => {
  return (
    <aside
      className="w-64 h-[685px] bg-neutral text-neutral-content flex flex-col justify-between p-4 -mt-[73px]"
      style={{ opacity: 1 }}
    >
      {/* Haut : logo + menu */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">M</div>
          <span className="text-xl font-semibold">Money Admin</span>
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
  )
}

export default Sidebar
