import { motion } from "framer-motion"

type StatBlockProps = {
  title: string
  value: string
  subtext: string
  icon: React.ReactNode
  iconColor: string
}

const StatBlock = ({ title, value, subtext, icon, iconColor }: StatBlockProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      // 🔧 MODIFICATION ICI : largeur dynamique
      // Remplace `max-w-[240px]` par `flex-1` pour que chaque carte s’étire dans le layout
      className="bg-white shadow-md p-6 rounded-[12px] flex flex-col justify-between flex-1 h-[190px]"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-base font-semibold text-gray-700">{title}</h3>
        <div className={`text-2xl ${iconColor}`}>{icon}</div>
      </div>
      <p className="text-3xl font-bold mt-2 text-black">{value}</p>
      <p className="text-sm mt-2 text-[#FF6600] font-medium">{subtext}</p>
    </motion.div>
  )
}

export default StatBlock
