type StatBlockProps = {
  title: string
  value: string
  subtext: string
  icon?: React.ReactNode
  color?: string
}

const StatBlock = ({ title, value, subtext, icon, color = "bg-primary" }: StatBlockProps) => {
  return (
    <div className={`card ${color} text-white shadow-md p-4`}>
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold">{title}</h3>
        {icon && <div className="text-xl">{icon}</div>}
      </div>
      <p className="text-2xl font-bold mt-2">{value}</p>
      <p className="text-xs mt-1 text-white/80">{subtext}</p>
    </div>
  )
}

export default StatBlock
