import "./App.css";
import ContainerImage from "@atomic/ContainerImage.tsx";

function App() {
  return (
    <div className="container" data-testid="container">
      <ContainerImage />
      <h1 data-testid="title">Vite + React + Typescript + Biome Boilerplate</h1>
    </div>
  );
}

export default App;