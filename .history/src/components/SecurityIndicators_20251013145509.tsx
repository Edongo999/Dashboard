import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts"

const rawData = [
  { name: "Sécurisé", value: 75 },
  { name: "Alerte", value: 20 },
  { name: "Risque", value: 5 }
]

const COLORS = ["#9CA3AF", "#F97316", "#3B82F6"]

const SecurityIndicators = () => {
  const total = rawData.reduce((sum, item) => sum + item.value, 0)
  const data = rawData.map((item) => ({
    ...item,
    percent: ((item.value / total) * 100).toFixed(0) + "%"
  }))

  return (
    <div className="bg-white rounded-[12px] shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Indicateurs de sécurité</h2>

      <div className="flex items-center justify-between h-64">
        {/* Donut chart */}
        <div className="w-2/3">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
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
