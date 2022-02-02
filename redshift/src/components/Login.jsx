import { useState } from "react";
import React from "react";

const Login = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
let tempUser;
let tempPassword;

    return ( 
        <div id="main-div" className="d-grid h-100">
        <form className="text-center w-100">
        <img  
        src="/images/RedShift.png" 
        alt=""></img>
        <br>
        </br>
        <br></br>
        <h3 className="fs-3 fw-normal"> Please sign in </h3>
        <br>
        </br>
            <input type="text" placeholder="Username" name="username" 

            // When the Input field detects a change (new key being pressed)
            onChange={(event) => {
                console.log(event.target);
                tempUser = event.target.value;
                console.log(tempUser);
                setUsername(event.target.value)
            }
            }/>

            <button type="button" onClick={() => {
                setUsername(tempUser);
            }} />
            
            <h3>{username} </h3>   
            <input type="text" placeholder="Password" name="Password"

            // When the Input field detects a change (new key being pressed)
            onChange={(event) => {
                console.log(event.target);
                tempUser = event.target.value;
                console.log(tempPassword);
                setPassword(event.target.value)
            }
            }/>

            <button type="button" onClick={() => {
                setPassword(tempPassword);
            }} />
            
            <h3>{password} </h3>  

            <button type="submit" >Login</button>
        <button >Reset</button> 
        </form>
        </div>
     );
}
 
export default Login;