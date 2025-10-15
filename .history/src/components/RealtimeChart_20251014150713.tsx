import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts"
import { useState } from "react"

// ✅ Données pour chaque vue (jour, semaine, mois)
const datasets = {
  jour: [
    { time: "00:00", value: 2800 },
    { time: "03:00", value: 2200 },
    { time: "06:00", value: 1600 },
    { time: "09:00", value: 1200 },
    { time: "12:00", value: 1800 },
    { time: "15:00", value: 2400 },
    { time: "18:00", value: 3200 },
    { time: "21:00", value: 2800 }
  ],
  semaine: [
    { time: "Lun", value: 5400 },
    { time: "Mar", value: 6200 },
    { time: "Mer", value: 5800 },
    { time: "Jeu", value: 6900 },
    { time: "Ven", value: 7200 },
    { time: "Sam", value: 5100 },
    { time: "Dim", value: 4300 }
  ],
  mois: [
    { time: "S1", value: 18000 },
    { time: "S2", value: 22000 },
    { time: "S3", value: 19500 },
    { time: "S4", value: 25000 }
  ]
}

const RealtimeChart = () => {
  const [view, setView] = useState<"jour" | "semaine" | "mois">("jour")

  return (
    // ✅ Conteneur fluide, prêt à s’élargir dans une grille
    <div className="bg-white rounded-[12px] shadow-md p-6 w-full max-w-none">
      
      {/* ✅ Titre + boutons de filtre */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Transactions en temps réel</h2>
        <div className="flex gap-2">
          {["jour", "semaine", "mois"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v as "jour" | "semaine" | "mois")}
              className={`text-sm px-3 py-1 rounded-md ${
                view === v ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ Graphique responsive avec ratio stable */}
      <div className="w-full aspect-[4/3] min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={datasets[view]}>
            {/* ✅ Dégradé pour le remplissage */}
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FBBF24" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#F97316" stopOpacity={0.2} />
              </linearGradient>
            </defs>

            {/* ✅ Axes et grille */}
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="time" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />

            {/* ✅ Tooltip personnalisé */}
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "none" }}
              labelStyle={{ color: "#374151", fontWeight: "500" }}
            />

            {/* ✅ Courbe + points */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="#F97316"
              strokeWidth={2}
              fill="url(#colorValue)"
              dot={{ r: 4, stroke: "#F97316", strokeWidth: 2, fill: "#fff" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default RealtimeChart
