import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts"

type SecurityLabel = "Connexions sécurisées" | "Alertes résolues" | "Alertes en cours"

const rawData: { name: SecurityLabel; value: number }[] = [
  { name: "Connexions sécurisées", value: 85 },
  { name: "Alertes résolues", value: 10 },
  { name: "Alertes en cours", value: 5 }
]

const COLOR_MAP: Record<SecurityLabel, string> = {
  "Connexions sécurisées": "#F97316",
  "Alertes résolues": "#FBBF24",
  "Alertes en cours": "#3B82F6"
}

const SecurityIndicators = () => {
  const total = rawData.reduce((sum, item) => sum + item.value, 0)

  const data = rawData.map((item) => ({
    ...item,
    percent: ((item.value / total) * 100).toFixed(0) + "%",
    color: COLOR_MAP[item.name]
  }))

  return (
    // 🔧 MODIFICATION ICI : contrôle du décalage horizontal
    // Pour décaler vers la droite, utilise `ml-2`, `ml-4`, `ml-6`, etc.
    // Pour centrer, retire `ml-*` et utilise `mx-auto`
    <div className="bg-white rounded-[12px] shadow-md p-6 w-[340px] h-[420px] ml-60 flex flex-col items-center justify-between">
      <h2 className="text-lg font-semibold text-gray-800">Indicateurs de sécurité</h2>

      {/* Donut + cercle externe */}
      <div className="relative flex items-center justify-center mt-2 mb-4">
        <div className="w-[200px] h-[200px] rounded-full border-[6px] border-gray-200 flex items-center justify-center">
          <div className="w-[160px] h-[160px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                >
                  {data.map((item) => (
                    <Cell key={item.name} fill={item.color} />
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

      {/* Légende en bas */}
      <div className="flex flex-col items-center gap-2 text-sm text-gray-700">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span>{item.name} ({item.percent})</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SecurityIndicators
