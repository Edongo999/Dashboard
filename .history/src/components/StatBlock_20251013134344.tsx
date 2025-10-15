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
      className="bg-white shadow-md p-6 rounded-[12px] flex flex-col justify-between"
      style={{ width: "240px", height: "190px", opacity: 1 }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-base font-semibold text-gray-700">{title}</h3>
        <div className={`text-2xl ${iconColor}`}>{icon}</div>
      </div>
      <p className="text-3xl font-bold mt-2 text-black">{value}</p>
      <p className="text-sm mt-2 text-[#FF6600] font-medium">{subtext}</p>
    </div>
  )
}

export default StatBlock
