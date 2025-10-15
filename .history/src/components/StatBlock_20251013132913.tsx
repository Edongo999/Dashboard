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
      className="bg-white shadow-md p-4 rounded-[12px] flex flex-col justify-between"
      style={{ width: "195.25px", height: "160px", opacity: 1 }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        <div className={`text-xl ${iconColor}`}>{icon}</div>
      </div>
      <p className="text-2xl font-bold mt-2 text-black">{value}</p>
      <div
        className="text-xs mt-2 px-2 py-1 rounded-full w-fit font-medium"
        style={{ backgroundColor: "#FF6600", color: "white" }}
      >
        {subtext}
      </div>
    </div>
  )
}

export default StatBlock
