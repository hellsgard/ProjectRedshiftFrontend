import axios from "axios";
import { useState } from "react";
import { clone, merge } from 'lodash';
import JWT from '../config/config.json'

export default function Login(props) {

    // const [validated, setValidated] = useState(false);
    // const [userDetails, setDetails] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    // const handleChange = ({ target: { name, value } }) => {
    //     const tempDetails = clone(userDetails);
    //     merge(tempDetails, { [name]: value });
    //     setDetails(tempDetails);
    // }



const handleSubmit = () => {
    console.log("user function running");
    console.log("Sending to back end for authentication");
    axios.post("http://localhost:8080/users/login", {username:username, password:password}) // error 400 {params: userObject}
    .then((response) => {
        console.log(response); 
        localStorage.setItem(JWT, response.data);
        // props.history.push('/test'); // this pushes the history to the test page - good for auditing?!
    })
    .catch((error) => {
        console.log('login failed', error);
        setError(error.response.data);
    })};

    const clearFields = () => {
        console.log("function to clear search fields");
    }

    return ( 
        <div id="main-div" className="d-grid h-100">
        <form className="text-center w-100">
        <img className="mb-4 RedShift-logo"
        src="/images/RedShift.png" 
        alt=""></img>
        
        <h1 className="mb-3 fs-3 fw-normal"> Please Login </h1>
        
        <input type="text" placeholder="Forename" name="Forename" className="position-relative" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <input type="text" placeholder="Surname" name="Surname" className="position-relative" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button type="button" variant="secondary" size="sm" onClick={() => handleSubmit()}>Login</button>
        <button id="reset" variant="secondary" size="sm" onClick={() => clearFields()}>Reset</button>
        </form>
        </div>
     );
}
 