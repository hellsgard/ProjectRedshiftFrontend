import axios from "axios";
import "../CSS/login.css";
import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import JWT from "../config/config.json";

const Login = (props) => {
  //   export default function Login(props) {
  // const [validated, setValidated] = useState(false);
  // const [userDetails, setDetails] = useState({ username: '', password: '' });
  const [error, setError] = useState("");

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
    axios
      .post("http://localhost:8080/users/login", {
        username: username,
        password: password,
      }) // error 400 {params: userObject}
      .then((response) => {
        console.log(response);
        localStorage.setItem(JWT, response.data);
        // response.data.redirect = '/'; // cant set the property to /
        if (response.statusText === "OK") {
          window.location = "/home";
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

        <h1 id="LG" className="mb-4 fs-4 fw-normal">
          {" "}
          REDSHIFT{" "}
        </h1>
        <h3> {}</h3>
        <input
          id="user"
          type="text"
          placeholder="Username"
          name="Forename"
          className="position-relative"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <h3> {}</h3>
        <input
          id="pass"
          className="mb-2"
          type="text"
          placeholder="Password"
          name="Surname"
          className="position-relative"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <h3> {}</h3>
        <br></br>
        <Button
          id="B1"
          type="button"
          variant="secondary"
          size="sm"
          onClick={() => handleSubmit()}
        >
          Login
        </Button>
        <Button
          id="B2"
          type="button"
          variant="secondary"
          size="sm"
          onClick={() => reset()}
        >
          Reset
        </Button>
        <h3> {}</h3>
        <Button
          id="B3"
          type="button"
          variant="secondary"
          size="sm"
          onClick={() => register()}
        >
          Register
        </Button>
        <p id="p1" className="mt-5 text-muted">
          REDSHIFT &copy; 2022
        </p>
      </Form>
    </div>
  );
  //   }
};
export default Login;
