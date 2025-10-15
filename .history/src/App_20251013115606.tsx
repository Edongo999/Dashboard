export default function App() {
  return (
    <div data-theme="cupcake" className="min-h-screen p-8">
      <h1 className="text-3xl font-bold underline text-primary">
        Bonjour le monde !
      </h1>
      <p className="text-base-content mt-4">
        Ce texte utilise la couleur principale du thème pour le contenu.
      </p>
      <button className="btn btn-primary mt-4">Bouton principal</button>
      <button className="btn btn-secondary mt-2">Bouton secondaire</button>
    </div>
  );
}
