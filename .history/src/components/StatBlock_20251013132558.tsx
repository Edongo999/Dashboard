type StatBlockProps = {
  title: string
  value: string
  subtext: string
  icon: React.ReactNode
  iconColor: string
  valueColor?: string
}

const StatBlock = ({ title, value, subtext, icon, iconColor, valueColor = "text-gray-900" }: StatBlockProps) => {
  return (
    <div
      className="bg-white shadow-md p-4 rounded-[12px] flex flex-col justify-between"
      style={{ width: "195.25px", height: "160px", opacity: 1 }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        <div className={`text-xl ${iconColor}`}>{icon}</div>
      </div>
      <p className={`text-2xl font-bold mt-2 ${valueColor}`}>{value}</p>
      <p className="text-xs mt-1 text-gray-500">{subtext}</p>
    </div>
  )
}

export default StatBlock
