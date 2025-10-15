import Sidebar from "./components/Sidebar"
import StatBlock from "./components/StatBlock"
import UserAvatar from "./components/UserAvatar"
import RealtimeChart from "./components/RealtimeChart"
import SecurityIndicators from "./components/SecurityIndicators"
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
      <main className="flex-1 overflow-auto p-6 bg-[#F3F4F6]">
        {/* Titre + avatar */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Tableau de bord administrateur
          </h1>
          <UserAvatar />
        </div>

        {/* 🔧 Cartes KPI alignées horizontalement */}
        <div className="flex gap-6 w-[1020px] mb-6">
          {kpis.map((kpi, i) => (
            <StatBlock key={i} {...kpi} />
          ))}
        </div>

        {/* 🔧 Section monitoring alignée sur la même largeur */}
        <div className="flex gap-6 w-[1020px]">
          <RealtimeChart />
          <SecurityIndicators />
        </div>
      </main>
    </div>
  )
}

export default App
