const RealtimeChart = () => {
  return (
    <div className="bg-white rounded-[12px] shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Transactions en temps réel</h2>
        <div className="flex gap-2">
          <button className="text-sm px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200">Jour</button>
          <button className="text-sm px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200">Semaine</button>
          <button className="text-sm px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200">Mois</button>
        </div>
      </div>
      <div className="h-64 flex items-center justify-center text-gray-400">
        {/* Graphique à intégrer ici */}
        <span>Graphique des transactions</span>
      </div>
    </div>
  )
}

export default RealtimeChart
