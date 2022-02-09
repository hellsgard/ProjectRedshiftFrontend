import "./CSS/App.css";
// import "./CSS/login.css";
// import Nav from './components/Nav.jsx';
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Logout from "./components/Logout.jsx";
import Lock from "./components/Lock.jsx";
import Scenario1 from "./components/Scenario1.jsx";
import Scenario2 from "./components/Scenario2.jsx";
import Scenario3 from "./components/Scenario3.jsx";
import Home from "./components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicInformation from "./components/BasicInformation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/lock" element={<Lock />}></Route>
          <Route path="/scenario1/:id" element={<Scenario1 />}></Route>
          <Route path="/scenario2" element={<Scenario2 />}></Route>
          <Route path="/scenario3" element={<Scenario3 />}></Route>
          {/* <Route path="/home" element={<RequireAuth/>}></Route> */}
          <Route path="/home" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/suspectProfile/basicInfo" element={<BasicInformation />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
