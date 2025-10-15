
import AppSidebar from "./components/Sidebar"; // import du Sidebar

export default function App() {
  return (
    <div data-theme="dark" className="min-h-screen flex">
      <AppSidebar /> {/* Sidebar à gauche */}
      <div className="flex-1 p-5 md:px-[15%]">
        <Navbar />
        
      </div>
      
    </div>
  );
}
