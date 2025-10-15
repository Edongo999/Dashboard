type StatBlockProps = {
  title: string
  value: string
  subtext: string
  icon: React.ReactNode
  iconColor: string
}

const StatBlock = ({ title, value, subtext, icon, iconColor }: StatBlockProps) => {
  return (
    <div
      className="bg-white shadow-md p-5 rounded-[12px] flex flex-col justify-between"
      style={{ width: "220px", height: "180px", opacity: 1 }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        <div className={`text-xl ${iconColor}`}>{icon}</div>
      </div>
      <p className="text-2xl font-bold mt-2 text-black">{value}</p>
      <p className="text-xs mt-2 text-[#FF6600] font-medium">{subtext}</p>
    </div>
  )
}

export default StatBlock
