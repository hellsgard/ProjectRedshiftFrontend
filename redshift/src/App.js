import "./CSS/App.css";
// import Nav from './components/Nav.jsx';
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';
import Lock from './components/Lock.jsx';
import Scenario1 from './components/Scenario1.jsx';
import Scenario2 from './components/Scenario2.jsx';
import Scenario3 from './components/Scenario3.jsx';
import Home from './components/Home.jsx';
import Login2 from './components/Login2.jsx';
import axios from 'axios';
import BankDetails from './components/BankDetails';
import AtmTransactions from './components/AtmTransactions';
import AtmPoint from './components/AtmPoint';
import Vehicles from './components/Vehicles';
import Epos from "./components/Epos";
import EposTransactions from "./components/EposTransactions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BankCards from "./components/BankCards";
import BasicInformation from "./components/BasicInformation";
import Associates from "./components/Associates";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

        <Route path='/' element = {<Login/>}></Route>
        <Route path='/logout' element = {<Logout/>}></Route>
        <Route path='/lock' element = {<Lock/>}></Route>
        <Route path='/scenario1/:id' element = {<Scenario1/>}></Route>
        <Route path='/scenario2' element = {<Scenario2/>}></Route>
        <Route path='/scenario3' element = {<Scenario3/>}></Route>
        <Route path='/home' element = {<Home/>}></Route>
        <Route path='/login2' element = {<Login2/>}></Route>
        <Route path='/bankdetails' element = {<BankDetails/>}></Route>
        <Route path='/bankCards' element = {<BankCards/>}></Route>
        <Route path='/atmtransactions' element = {<AtmTransactions/>}></Route>
        <Route path='/atmpoint' element = {<AtmPoint/>}></Route>
        <Route path='/vehicles' element = {<Vehicles/>}></Route>
        <Route path='/suspectProfile/basicInfo' element = {<BasicInformation/>}></Route>


          <Route path="/epos" element={<Epos />}></Route>
          <Route
            path="/epostransactions"
            element={<EposTransactions />}
          ></Route>
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
