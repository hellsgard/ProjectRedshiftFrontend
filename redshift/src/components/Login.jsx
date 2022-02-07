import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import  Form  from "react-bootstrap/Form";



const Login = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
let tempUser;
let tempPassword;

    return ( 

        
        <div id="main-div" className="d-grid h-100">
        <Form className="rounded p-5 text-center w-30">
            
        <img className="mb-4 RedShift-logo"
        src="/images/RedShift.png" 
        alt=""></img>
        
        <h1 className="mb-4 fs-4 fw-bold"> REDSHIFT </h1>
        
    
            <input id="user"  type="text" placeholder="Username" name="username" className="position-relative"

            // When the Input field detects a change (new key being pressed)
            onChange={(event) => {
                console.log(event.target);
                tempUser = event.target.value;
                console.log(tempUser);
                setUsername(event.target.value)
            }
            }/>

          
            <h3> {} </h3>   
            <input  id="pass" className="mb-2" type="text" placeholder="Password" name="password" className="position-relative"

            // When the Input field detects a change (new key being pressed)
            onChange={(event) => {
                console.log(event.target);
                tempUser = event.target.value;
                console.log(tempPassword);
                setPassword(event.target.value)
            }
            }/>

                
            <h3> {} </h3>  

            <br></br>
            
            <Button id="B1" type="button" variant="secondary" onClick={() => {
                setPassword(tempPassword);
                setUsername(tempUser);
               
            }}>Login</Button>
                       
            <Button id="B2" variant="secondary">Reset</Button>
        {/* <button >Reset</button>  */}
        <p className="mt-5 text-muted">REDSHIFT &copy; 2022</p>
        </Form>
        </div>
        
     );
}
 
export default Login;