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

const datasets = {
  jour: [
    { time: "00:00", value: 1000 },
    { time: "03:00", value: 600 },
    { time: "06:00", value: 800 },
    { time: "09:00", value: 400 },
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
    <div className="bg-white rounded-[12px] shadow-md p-6 w-[640px]">
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
          <AreaChart data={datasets[view]}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FBBF24" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#F97316" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="time" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "none" }}
              labelStyle={{ color: "#374151", fontWeight: "500" }}
            />
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
