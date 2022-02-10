import Navb from "./Navb.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Suspect from "./Suspect.jsx";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import JWT from "../config/config.json";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import "../CSS/Home.css";

const Home = () => {
  // // Creating state for a suspects information
  const [forename, setForename] = useState("");
  const [surname, setSurname] = useState("");
  const [DOB, setDOB] = useState("");
  const [timeDate, setTimeDate] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [radius, setRadius] = useState("");
  const [vehicleReg, setVehicleReg] = useState("");
  const [fleesTimeStamp, setFleesTimeStamp] = useState("");

  const [suspects, setSuspects] = useState([]);

  const createQueryPerson = () => {
    const queryPerson = {
      surname: surname,
      forenames: forename,
      dateOfBirth: DOB,
    };
    console.log(queryPerson);
    console.log("sending to back end");
    const token = localStorage.getItem(JWT);
    console.log(token);
    axios
      .get("http://localhost:8080/queryPerson/person", {
        params: queryPerson,
        headers: { Authorization: `Bearer ${token}` },
      }) // authorisation header put in here
      .then((response) => {
        console.log(response);
        console.log("queryperson query");

        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createQueryIncident = () => {
    const token = localStorage.getItem(JWT);
    console.log("incident");
    const queryIncident = {
      timeDate: timeDate,
      latitude: latitude,
      longitude: longitude,
      radius: radius,
    };
    console.log(queryIncident);
    console.log("sending to back end");
    axios
      .get("http://localhost:8080/queryIncident/incident", {
        params: queryIncident,
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createQuerySuspectFlees = () => {
    const token = localStorage.getItem(JWT);
    console.log("suspect flees");
    const queryFlees = {
      timestamp: fleesTimeStamp,
      vehicleReg: vehicleReg,
    };
    console.log(queryFlees);
    console.log("sending to back end");
    axios
      .get("http://localhost:8080/queryFlees/flees", {
        params: queryFlees,
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearFields = () => {
    console.log("function to clear search fields");
  };

  function setData(res) {
    setSuspects(res.data);
  }

  const rowHome = {
    color: "green",
    fontSize: "23px",
  };
  return (
    <div className="SomeContainer">
      <Navb></Navb>
      <div>
        <br></br>
      </div>

      <Row className="right">
        {suspects.map((suspect) => {
          return (
            <Col className="center">
              <Suspect
                citizenID={suspect.citizenID}
                forenames={suspect.forenames}
                surname={suspect.surname}
                homeAddress={suspect.homeAddress}
                dateOfBirth={suspect.dateOfBirth}
                placeOfBirth={suspect.placeOfBirth}
                sex={suspect.sex}
              />
            </Col>
          );
        })}
      </Row>
      <Box
        className="homeform"
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h4 className="centre">Citizen database</h4>
        {/* This is the Search Citizen Box */}
        <TextField
          id="outlined-basic"
          label="Forename"
          variant="outlined"
          type="text"
          placeholder="Forename"
          name="Forename"
          value={forename}
          onChange={(e) => setForename(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Surname"
          variant="outlined"
          type="text"
          placeholder="Surname"
          name="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="yyyy-mm-dd"
          variant="outlined"
          type="text"
          placeholder="yyyy-mm-dd"
          name="DOB"
          value={DOB}
          onChange={(e) => setDOB(e.target.value)}
        />
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            id="reset"
            onClick={() => clearFields()}
            startIcon={<DeleteIcon />}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            type="button"
            onClick={() => createQueryPerson()}
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </Stack>
      </Box>
      <br></br>
      {/* This is the Search Incident Box */}
      <Box
        className="homeform"
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h4 className="centre">Incidents Reported</h4>
        <TextField
          id="outlined-basic"
          label="Timestamp"
          variant="outlined"
          type="text"
          placeholder="Timestamp"
          name="Time/Date"
          value={timeDate}
          onChange={(e) => setTimeDate(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Latitude"
          variant="outlined"
          type="text"
          placeholder="Latitude"
          name="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Longitude"
          variant="outlined"
          type="text"
          placeholder="Longitude"
          name="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Radius"
          variant="outlined"
          type="number"
          placeholder="Radius"
          name="Radius"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
        />
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            onClick={() => clearFields()}
            startIcon={<DeleteIcon />}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            onClick={() => createQueryIncident()}
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </Stack>
      </Box>
      <br></br>
      {/* This is the Suspect Flees Box */}
      <Box
        className="homeform"
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h4 className="centre">Suspect Location</h4>
        <TextField
          id="outlined-basic"
          label="Vehicle Reg"
          variant="outlined"
          type="text"
          placeholder="Vehicle Reg"
          name="Vehicle Reg"
          value={vehicleReg}
          onChange={(e) => setVehicleReg(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="TimeStamp"
          variant="outlined"
          type="text"
          placeholder="Timestamp"
          name="Time/date"
          value={fleesTimeStamp}
          onChange={(e) => setFleesTimeStamp(e.target.value)}
        />
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            onClick={() => clearFields()}
            startIcon={<DeleteIcon />}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            onClick={() => createQuerySuspectFlees()}
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </Stack>
      </Box>
      <br></br>
    </div>
  );
};

export default Home;