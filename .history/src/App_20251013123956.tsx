import AppSidebar from "./components/Sidebar";

export default function App() {
  return (
    <div data-theme="mytheme" className="min-h-screen flex">
      <AppSidebar /> {/* <-- ici on utilise le nom correct */}
      <div className="flex-1 p-5">
        Contenu principal ici
      </div>
    </div>
  );
}
