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
      bgColor: "bg-[#2563EB]",       // Bleu foncé
      iconColor: "text-[#93C5FD]"    // Bleu clair
    },
    {
      title: "Volume transactionnel",
      value: "1,245,300 €",
      subtext: "+1.2% aujourd'hui",
      icon: <CreditCard />,
      bgColor: "bg-[#059669]",       // Vert foncé
      iconColor: "text-[#6EE7B7]"    // Vert clair
    },
    {
      title: "Solde global",
      value: "4,583,621 €",
      subtext: "-2.1% cette semaine",
      icon: <Wallet />,
      bgColor: "bg-[#7C3AED]",       // Violet foncé
      iconColor: "text-[#C4B5FD]"    // Violet clair
    },
    {
      title: "Tickets de support",
      value: "37",
      subtext: "5 nouveaux aujourd'hui",
      icon: <LifeBuoy />,
      bgColor: "bg-[#EA580C]",       // Orange foncé
      iconColor: "text-[#FDBA74]"    // Orange clair
    }
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6 bg-base-100">
        <h1 className="text-2xl font-bold mb-6">Tableau de bord administrateur</h1>

        {/* Cartes KPI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {kpis.map((kpi, i) => (
            <StatBlock key={i} {...kpi} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
