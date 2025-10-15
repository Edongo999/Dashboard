import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const rawData = [
  { name: "Transactions sécurisées", value: 850 },
  { name: "Alertes résolues", value: 100 },
  { name: "Alertes en cours", value: 50 }
]

const COLORS = ["#9CA3AF", "#F97316", "#3B82F6"]

const SecurityIndicators = () => {
  const total = rawData.reduce((sum, item) => sum + item.value, 0)
  const data = rawData.map((item) => ({
    ...item,
    percent: ((item.value / total) * 100).toFixed(1) + "%"
  }))

  return (
    <div className="bg-white rounded-[12px] shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Indicateurs de sécurité</h2>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={3}
              label={({ name, percent }) => `${name} (${percent})`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number, name: string) => [`${value}`, name]} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default SecurityIndicators
