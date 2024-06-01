import "./style/App.css";
import "./style/Header.css";
import "./style/Landing.css";
import "./style/SidebarMedia.css";
import "./style/Bio.css";
import "./style/OutlineHeader.css";
import "./style/Homepage.css";
import "./style/About.css";
import "./style/Projects.css";
import "./style/Skills.css";
import "./style/TechList.css";
import "./style/Contact.css";
import "./style/Inputs.css";
import "./style/Button.css";

import Header from "./components/header";
import Homepage from "./views/homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
