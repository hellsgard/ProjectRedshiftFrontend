import "./CSS/App.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import Nav from './components/Nav.jsx';
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';
import Lock from './components/Lock.jsx';
import Scenario1 from './components/Scenario1.jsx';
import Scenario2 from './components/Scenario2.jsx';
import Scenario3 from './components/Scenario3.jsx';
import Home from './components/Home.jsx';
import Login2 from './components/Login2.jsx';
import BankDetails from './components/BankDetails';
import AtmTransactions from './components/AtmTransactions';
import AtmPoint from './components/AtmPoint';
import Vehicles from './components/Vehicles';
import Epos from "./components/Epos";
import EposTransactions from "./components/EposTransactions";
import {Link, BrowserRouter, Routes, Route } from "react-router-dom";
import BankCards from "./components/BankCards";
import Card from 'react-bootstrap/Card';
import RequireAuth from "./components/RequireAuth";
import * as React from "react";
const authContext = React.createContext();


const LoginPage = () => <h1>Login (Public)</h1>;
const HomePage = () => <h1>Home (Private)</h1>;


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element = {<Login/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/logout' element = {<Logout/>}></Route>
        <Route path='/lock' element = {<Lock/>}></Route>
        <Route path='/scenario1' element = {<Scenario1/>}></Route>
        <Route path='/scenario2' element = {<Scenario2/>}></Route>
        <Route path='/scenario3' element = {<Scenario3/>}></Route>
        <Route path="/home" element={<RequireAuth/>}></Route>
      {/* <Route path='/home'   element = {<Home/>}></Route> */}
        <Route path='/login2' element = {<Login2/>}></Route>
        <Route path='/bankdetails' element = {<BankDetails/>}></Route>
        <Route path='/bankCards' element = {<BankCards/>}></Route>
        <Route path='/atmtransactions' element = {<AtmTransactions/>}></Route>
        <Route path='/atmpoint' element = {<AtmPoint/>}></Route>
        <Route path='/vehicles' element = {<Vehicles/>}></Route>

          <Route path="/epos" element={<Epos />}></Route>
          <Route
            path="/epostransactions"
            element={<EposTransactions />}
          ></Route>
      
        </Routes>
        <Link to="/home">TESTING PROTECTED ROUTE</Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
