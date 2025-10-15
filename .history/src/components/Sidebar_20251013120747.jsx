// src/components/Sidebar.jsx
const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-base-200 p-4">
      <h2 className="text-xl font-bold mb-6">Admin</h2>
      <ul className="menu">
        <li><a className="active">Accueil</a></li>
        <li><a>Statistiques</a></li>
        <li><a>Utilisateurs</a></li>
        <li><a>Paramètres</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
