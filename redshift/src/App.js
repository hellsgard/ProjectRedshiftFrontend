// import "./CSS/App.css";
import Manager from "./components/Manager";
import "./CSS/App.css";
// import "./CSS/login.css";
// import Nav from './components/Nav.jsx';
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Logout from "./components/Logout.jsx";
//import Lock from "./components/Lock.jsx";
import Scenario1 from "./components/Scenario1.jsx";
import Scenario2 from "./components/Scenario2.jsx";
import Scenario3 from "./components/Scenario3.jsx";
import Home from "./components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicInformation from "./components/BasicInformation";

function App() {

  return (
    <div>
      <Manager/>
    </div>
  );
}

export default App;
