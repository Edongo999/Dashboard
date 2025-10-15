import Sidebar from "./components/Sidebar"
import StatBlock from "./components/StatBlock"
import { Users, CreditCard, Wallet, LifeBuoy } from "lucide-react"

const App = () => {
  const kpis = [
    {
      title: "Utilisateurs totaux",
      value: "24,521",
      subtext: "+13.2% depuis la semaine dernière",
      icon: <Users />,
      iconColor: "text-blue-500"
    },
    {
      title: "Volume transactionnel",
      value: "1,245,300 €",
      subtext: "+1.2% aujourd'hui",
      icon: <CreditCard />,
      iconColor: "text-green-500"
    },
    {
      title: "Solde global",
      value: "4,583,621 €",
      subtext: "-2.1% cette semaine",
      icon: <Wallet />,
      iconColor: "text-purple-500"
    },
    {
      title: "Tickets de support",
      value: "37",
      subtext: "5 nouveaux aujourd'hui",
      icon: <LifeBuoy />,
      iconColor: "text-orange-500"
    }
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main
        className="flex-1 overflow-auto p-6"
        style={{ backgroundColor: "#F3F4F6" }}
      >
        {/* Ligne titre + bloc connecté */}
        <div className="flex items-center justify-between mb-6">
          {/* Titre */}
          <h1 className="text-4xl font-bold text-gray-800">
            Tableau de bord administrateur
          </h1>

          {/* Bloc connecté */}
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-md shadow-sm">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
                TS
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white bg-green-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Connecté</p>
              <p className="text-xs text-gray-500">Thomas S.</p>
            </div>
          </div>
        </div>

        {/* Cartes KPI responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {kpis.map((kpi, i) => (
            <StatBlock key={i} {...kpi} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
