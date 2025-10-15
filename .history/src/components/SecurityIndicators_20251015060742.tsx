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
    // ✅ Largeur réduite (~360px), centré mobile, aligné gauche desktop
    <div className="bg-white rounded-[12px] shadow-md p-6 w-full max-w-[360px] lg:mx-0 mx-auto flex flex-col items-center justify-between min-h-[420px]">
      
      {/* ✅ Titre centré */}
      <h2 className="text-lg font-semibold text-gray-800 text-center">Indicateurs de sécurité</h2>

      {/* ✅ Donut centré */}
      <div className="relative flex items-center justify-center mt-4 mb-6 w-full aspect-square max-w-[220px]">
        <div className="w-full h-full rounded-full border-[6px] border-gray-200 flex items-center justify-center">
          <div className="w-[80%] h-[80%]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius="50%"
                  outerRadius="80%"
                  paddingAngle={2}
                >
                  {data.map((item) => (
                    <Cell key={item.name} fill={item.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* ✅ Texte centré dans le donut */}
          <div className="absolute text-center">
            <p className="text-xl font-bold text-orange-500">85%</p>
            <p className="text-sm text-gray-600">Sécurisé</p>
          </div>
        </div>
      </div>

      {/* ✅ Légende centrée */}
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
