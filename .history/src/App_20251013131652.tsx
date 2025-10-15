import Sidebar from "./components/Sidebar"
import StatBlock from "./components/StatBlock"
import { Users, CreditCard, Wallet, LifeBuoy } from "lucide-react"

const App = () => {
  const kpis = [
    {
      title: "Utilisateurs totaux",
      value: "24,521",
      subtext: "+12.5% depuis la semaine dernière",
      icon: <Users />,
      color: "bg-blue-600"
    },
    {
      title: "Volume transactionnel",
      value: "1,245,300 €",
      subtext: "+1.2% aujourd'hui",
      icon: <CreditCard />,
      color: "bg-green-600"
    },
    {
      title: "Solde global",
      value: "4,583,621 €",
      subtext: "-2.1% cette semaine",
      icon: <Wallet />,
      color: "bg-purple-600"
    },
    {
      title: "Tickets de support",
      value: "37",
      subtext: "5 nouveaux aujourd'hui",
      icon: <LifeBuoy />,
      color: "bg-orange-600"
    }
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6 bg-base-100">
        <h1 className="text-2xl font-bold mb-6">Tableau de bord administrateur</h1>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {kpis.map((kpi, i) => (
            <StatBlock key={i} {...kpi} />
          ))}
        </div>

        {/* Tu pourras ajouter ici les autres sections : graphique, liste, etc. */}
      </main>
    </div>
  )
}

export default App
