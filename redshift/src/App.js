
import './CSS/App.css';
import Nav from './components/Nav.jsx';
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';
import Scenario1 from './components/Scenario1';
import Scenario2 from './components/Scenario2';
import Scenario3 from './components/Scenario3';

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

    </div>
  );
}

export default App;
