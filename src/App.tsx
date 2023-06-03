import "./App.css";
import { Aside, MainContent } from "./components";

function App() {
  return (
    <div className="flex">
      <Aside />
      <MainContent />
    </div>
  );
}

export default App;
