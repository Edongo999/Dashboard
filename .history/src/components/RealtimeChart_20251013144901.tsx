import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"
import { useState } from "react"

const datasets = {
  jour: [
    { time: "06:00", value: 1200 },
    { time: "09:00", value: 800 },
    { time: "12:00", value: 1600 },
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
    <div className="bg-white rounded-[12px] shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
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

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={datasets[view]}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default RealtimeChart
