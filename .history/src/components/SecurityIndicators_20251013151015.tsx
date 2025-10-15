import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts"

const rawData = [
  { name: "Connexions sécurisées", value: 85 },
  { name: "Alertes résolues", value: 10 },
  { name: "Alertes en cours", value: 5 }
]

const COLORS = ["#F97316", "#FBBF24", "#EF4444"]

const SecurityIndicators = () => {
  const total = rawData.reduce((sum, item) => sum + item.value, 0)
  const data = rawData.map((item) => ({
    ...item,
    percent: ((item.value / total) * 100).toFixed(0) + "%"
  }))

  return (
    <div className="bg-white rounded-[12px] shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Indicateurs de sécurité</h2>

      <div className="flex items-center justify-between h-64 relative">
        {/* Cercle externe + donut */}
        <div className="w-2/3 flex items-center justify-center relative">
          <div className="w-[180px] h-[180px] rounded-full border-[6px] border-gray-200 flex items-center justify-center">
            <div className="w-[140px] h-[140px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={2}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Texte centré */}
            <div className="absolute text-center">
              <p className="text-xl font-bold text-orange-500">85%</p>
              <p className="text-sm text-gray-600">Sécurisé</p>
            </div>
          </div>
        </div>

        {/* Légende externe */}
        <div className="flex flex-col gap-2 text-sm text-gray-700">
          {data.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[i] }}
              />
              <span>{item.name} ({item.percent})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SecurityIndicators
