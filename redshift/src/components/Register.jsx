import axios from "axios";
import { useState } from "react";
import { clone, merge } from 'lodash';
import JWT from '../config/config.json'

const Register = (props) => {
    const [error, setError] = useState('');

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    const reset = (event) => {
        console.log("function to clear search fields");
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }

    const register = () => {
        console.log("register function running");
        console.log("Sending to back end for registration");
        axios.post("http://localhost:8080/users/register", {username:username, password:password}) // error 400 {params: userObject}
        .then((response) => {
            console.log(response); 
            localStorage.setItem(JWT, response.data);
            if (response.statusText === 'OK') {
                window.location = "/login"
            }
        })
        .catch((error) => {
            console.log('registration failed', error);
            setError(error.response.data);
        })};

    const toLogin = () => {
        console.log("going back to login");
        window.location = "/login"
    }

    return ( 
        <div id="main-div" className="d-grid h-100">
        <form className="text-center w-100" >      
        <img className="mb-4 RedShift-logo"
        src="/images/RedShift.png" 
        alt=""></img>
        
        <h1 className="mb-3 fs-3 fw-normal"> Registration </h1>
       

        <input type="text" placeholder="username" id="username"  className="position-relative" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <input type="password" placeholder="password" id="password" className="position-relative" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button type="button" variant="secondary" size="sm" onClick={() => register()}>Register</button>
        <button type="button" id="reset" variant="secondary" size="sm" onClick={() => reset()}>Reset</button>
        <br></br>
        <br></br>
        <button type="button" id="return" variant="secondary" size="sm" onClick={() => toLogin()}>Back to login</button>

        </form>
        </div>
);
}


 
export default Register;