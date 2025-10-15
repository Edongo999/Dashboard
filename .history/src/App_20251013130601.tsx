import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6 bg-base-100">
        {/* Contenu principal ici */}
        <h1 className="text-2xl font-bold mb-4">Tableau de bord administrateur</h1>
      </main>
    </div>
  )
}

export default App
