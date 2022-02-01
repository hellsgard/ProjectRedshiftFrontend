import { useState } from "react";
const Login = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
let tempUser;
let tempPassword;

    return ( 
        <div>
            <h1>Redshift logo</h1>
        <form>
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