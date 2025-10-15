const SecurityIndicators = () => {
  return (
    <div className="bg-white rounded-[12px] shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Indicateurs de sécurité</h2>
      <div className="h-64 flex items-center justify-center text-gray-400">
        {/* Donut chart à intégrer ici */}
        <span>Diagramme des alertes</span>
      </div>
    </div>
  )
}

export default SecurityIndicators
