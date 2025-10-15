

import Sidebar from "./components/Sidebar"
import RealtimeChart from "./components/RealtimeChart"
import SecurityIndicators from "./components/SecurityIndicators"
import RecentActivity from "./components/RecentActivity"
import NewUsersTable from "./components/NewUsersTable"

const App = () => {
  return (
    // ✅ Hauteur dynamique qui pousse le sidebar jusqu’en bas
    <div className="flex min-h-[100dvh] bg-[#F3F4F6]">
      <Sidebar />

      {/* ✅ Contenu principal avec padding et fond gris */}
      <main className="flex-1 overflow-auto p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Tableau de bord administrateur</h1>

        {/* ✅ Cartes KPI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* ... tes cartes KPI ici ... */}
        </div>

        {/* ✅ Graphiques principaux */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_400px] gap-6 mb-6 w-full">
          <RealtimeChart />
          <SecurityIndicators />
        </div>

        {/* ✅ Blocs secondaires */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivity />
          <NewUsersTable />
        </div>
      </main>
    </div>
  )
}

export default App
