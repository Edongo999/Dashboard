import RealtimeChart from "./RealtimeChart"
import SecurityIndicators from "./SecurityIndicators"

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      {/* 🔸 Composant à droite */}
      <div className="w-[340px]">
        <SecurityIndicators />
      </div>

      {/* ✅ Ton graphique qui s’élargit vers la gauche */}
      <RealtimeChart />
    </div>
  )
}

export default Dashboard
