import Nav from './Nav.jsx';
import { useState } from "react";
import axios from "axios";

const Logout = () => {

    const [logout, setLogout] = useState("");
    const [error, setError] = useState('');

    const loggingOut = () => {
        console.log("Logging user out function");
        axios.delete("http://localhost:8080/users/logout") 
        .then((response) => {
            console.log(response.statusText); 
            
        if (response.statusText === 'OK') {
            window.location = "/"
        // } else if (response.statusText === '401'){
        //     window.location = "/"
        }
        })
        .catch((error) => {
            console.log('logout failed', error);
            setError(error.response.data);
        })};
    return ( 
        <div>
            <Nav></Nav>
            <h2> This is the logging out page</h2>
            <button type="button" onClick={() =>loggingOut()}>Logout</button>
        </div>
     );
}
 
export default Logout;