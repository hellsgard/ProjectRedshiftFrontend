import axios from "axios";
import { useState } from "react";
import { clone, merge } from "lodash";
import JWT from "../config/config.json";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../CSS/Register.css";

const Register = (props) => {
  const [error, setError] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const reset = (event) => {
    console.log("function to clear search fields");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  };

    const register = () => {
        console.log("register function running");
        console.log("Sending to back end for registration");
        axios.post("http://localhost:8080/users/register", {username:username, password:password}) // error 400 {params: userObject}
        .then((response) => {
            console.log(response); 
            localStorage.setItem(JWT, response.data);
            if (response.statusText === 'OK') {
                window.location = "/"
            }
        })
        .catch((error) => {
            console.log('registration failed', error);
            setError(error.response.data);
        })};

  const toLogin = () => {
    console.log("going back to login");
    window.location = "/";
  };

  return (
    <div id="reg-div" className="d-grid h-100">
      <Form className="form" className="rounded p-5 text-center w-30">
        <img
          className="mb-4 RedShift-logo"
          src="/images/RedShift.png"
          alt=""
        ></img>

        <h1 className="mb-4 fs-4 fw-normal"> REGISTER </h1>

        <input
          id="userR"
          type="text"
          placeholder="Username"
          name="username"
          className="position-relative"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <h3> {}</h3>
        <input
          id="passR"
          type="password"
          placeholder="Password"
          name="password"
          className="position-relative"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <h3> {}</h3>
        <br></br>
        <Button
          type="button"
          id="register"
          variant="secondary"
          size="sm"
          onClick={() => register()}
        >
          Register
        </Button>
        <Button
          type="button"
          id="reset"
          variant="secondary"
          size="sm"
          onClick={() => reset()}
        >
          Reset
        </Button>
        <h3> {}</h3>
        <Button
          type="button"
          id="return"
          variant="secondary"
          size="sm"
          onClick={() => toLogin()}
        >
          Back to login
        </Button>
        <p id="p1" className="mt-5 text-muted">
          REDSHIFT &copy; 2022
        </p>
      </Form>
    </div>
  );
};

export default Register;
