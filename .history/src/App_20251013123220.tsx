import AppSidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="min-h-screen flex">
      <AppSidebar />
      <div className="flex-1 p-5">
        Contenu principal ici
      </div>
    </div>
  );
}
