
import './CSS/App.css';
import Nav from './components/Nav.jsx';
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';
import Lock from './components/Lock.jsx';
import Scenario1 from './components/Scenario1.jsx';
import Scenario2 from './components/Scenario2.jsx';
import Scenario3 from './components/Scenario3.jsx';
import Welcome from './components/Welcome.jsx';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
       <h1> This is the redshift logo</h1>
        <h2>
         The redshift login page
        </h2>
        
        <form> 
        <label for="username">username</label>
        <input type="text" id="username" name="username"/>
        <label for="password">password</label>
        <input type="password" id="password" name="password"/> 
        <button type="submit" >Login</button>
        <button >Reset</button>
        </form>
        <BrowserRouter>
        <Route path='/' element = {<Login/>}></Route>
        <Route path='/logout' element = {<Logout/>}></Route>
        <Route path='/lock' element = {<Lock/>}></Route>
        <Route path='/scenario1' element = {<Scenario1/>}></Route>
        <Route path='/scenario2' element = {<Scenario2/>}></Route>
        <Route path='/scenario3' element = {<Scenario3/>}></Route>
        <Route path='/welcome' element = {<Welcome/>}></Route>
        </BrowserRouter>

    </div>
  );
}

export default App;
