import axios from "axios";
import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import JWT  from "../config/config.json";

const Login = ({showUser ,saveUser }) => {
  
  const [error, setError] = useState("");

  
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
 

  const handleSubmit = () => {
    console.log("user function running");
    console.log("Sending to back end for authentication");
    axios
      .post("http://localhost:8080/users/login", {
        username: username,
        password: password
      }) // error 400 {params: userObject}
      .then((response) => {
        console.log(response);
        localStorage.setItem(JWT, response.data);
        if (response.statusText === "OK") {
          window.location = "/home"; // use navigate instead
        } else if (response.statusText === "401") {
          window.location = "/";
        }
      })
      .catch((error) => {
        console.log("login failed", error);
        setError(error.response.data);
      });
  };

  const register = () => {
    console.log("going to registration page");
    window.location = "/register";
  };

  const reset = (event) => {
    console.log("function to clear search fields");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  };

  return (
    <div id="main-div" className="d-grid h-100">
      <Form className="rounded p-5 text-center w-30">
        <img
          className="mb-4 RedShift-logo"
          src="/images/RedShift.png"
          alt=""
        ></img>

        <h1 className="mb-3 fs-3 fw-normal"> Please Login </h1>

        <input
          type="text"
          placeholder="Username"
          name="Username"
          className="position-relative"
          value={username}
          onChange={(e) => {
            // saveUser(e.target.value);
            setUsername(e.target.value);
          }}
        ></input>
        <input
          type="Password"
          placeholder="Password"
          name="Password"
          className="position-relative"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          type="button"
          variant="secondary"
          size="sm"
          onClick={() => handleSubmit()}
        >
          Login
        </button>
        <button
          type="button"
          id="reset"
          variant="secondary"
          size="sm"
          onClick={() => reset()}
        >
          Reset
        </button>
        <br></br>
        <br></br>

        <button
          type="button"
          variant="secondary"
          size="sm"
          onClick={() => register()}
        >
          Register
        </button>
      </Form>
    </div>
  );
};
export default Login;
