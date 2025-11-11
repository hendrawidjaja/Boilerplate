import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";

const ContainerImage = () => (
  <div className="container-image" data-testid="container-image">
    <a href="https://vite.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>

    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>
);

export default ContainerImage;