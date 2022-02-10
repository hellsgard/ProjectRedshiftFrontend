import Navb from './Navb.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Suspect from './Suspect.jsx';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import JWT from '../config/config.json';
import {Link} from 'react-router-dom';
import IncidentVehicles from './IncidentVehicles';
import Tab from "react-bootstrap/Tab";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import IncidentFinancial from './IncidentFinancial';
import IncidentMap from './IncidentMap.jsx';
import '../CSS/Scenario2.css';
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import "../CSS/Home.css";



const Scenario2 = () => {

    const [timeDate, setTimeDate] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [seconds, setSeconds] = useState("");
    const [incidentData, setIncidentData] = useState([]);
    const [distance, setDistance] = useState("");

    const createQueryIncident = () => {
        const token = localStorage.getItem(JWT);
        console.log("incident");
        const queryIncident = {
            timeDate: timeDate,
            latitude: latitude,
            longitude: longitude,
            seconds: seconds,
            distance: distance
        }; 
        console.log(queryIncident);
        console.log("sending to back end");
        axios.get("http://localhost:8080/queryIncident/incidentVehicle", {params: queryIncident, headers: {'Authorization': `Bearer ${token}`}})
        .then((response) => {
            console.log(response.data)
            setIncidentData(response.data);
        })
        .catch((error) => {
            console.log(error);
        })};

        const clearFields = () => {
            console.log("function to clear search fields");
        }




    return ( 
        <div>
            <Navb></Navb>
            <h1> Scenario 2 - Suspect Flees</h1>

            <Box
      className="S2form"
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <h4 className="centre">Find Suspect</h4>
      {/* This is the Search Citizen Box */}
      <Stack direction="row" spacing={2}>
      <h5>Please enter a time stamp in the format YYYY-MM-DD HH:MM:SS.000</h5>
      <TextField
        id="outlined-basic"
        label="Timestamp"
        variant="outlined"
        type="text"
        placeholder="Timestamp"
        name="Timestamp"
        value={timeDate}
        onChange={(e) => setTimeDate(e.target.value)}
      />
      </Stack>
      <Stack direction="row" spacing={2}>
      <h5>Please enter a Latitude</h5>  
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
      </Stack>
      <Stack direction="row" spacing={2}>
      <h5>Please enter a Longitude</h5>
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
      </Stack>
      <Stack direction="row" spacing={2}>
      <h5>Please enter a number of seconds to search before and after</h5>
      <TextField
        id="standard-basic"
        label="Seconds"
        variant="outlined"
        type="text"
        placeholder="Seconds"
        name="Seconds"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
      />
      </Stack>
      <Stack direction="row" spacing={2}>
      <h5>Please enter distance to search around the location</h5>
      <TextField
        id="standard-basic"
        label="Distance"
        variant="outlined"
        type="text"
        placeholder="Distance"
        name="Distance"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
      />
      </Stack>
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
          onClick={() => createQueryIncident()}
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </Stack>
    </Box>


            <h3> Find Suspect</h3>
            {/* <form>
            <input type="text" placeholder="Timestamp" name="Time/Date" value={timeDate} onChange={(e) => setTimeDate(e.target.value)}></input>
            <label className="S2label" for="timestamp">Please enter a time stamp in the format YYYY-MM-DD HH:MM:SS.000</label><br></br>
            <input type="text" placeholder="Latitude" name="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)}></input>
            <label className="S2label" for="timestamp">Please enter a latitude</label><br></br>
            <input type="text" placeholder="Longitude" name="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)}></input>
            <label className="S2label" for="timestamp">Please enter a longitude</label><br></br>
            <input type="number" placeholder="Seconds" name="Seconds" value={seconds} onChange={(e) => setSeconds(e.target.value)}></input>
            <label className="S2label" for="timestamp">Please enter a number of seconds to search before and after</label><br></br>
            <input type="number" placeholder="Distance" name="Distance" value={distance} onChange={(e) => setDistance(e.target.value)}></input>
            <label className="S2label" for="timestamp">Please enter distance to search around the location (0.01 = 1 mile, 0.05 = 5 miles) </label><br></br>
            <Link to="/Scenario2">
            <button type="button" onClick={() => createQueryIncident()}>Submit</button>
            </Link>
            <button id="reset" onClick={() => clearFields()}>Reset</button> 
            </form> */}

            <Container fluid>
         <Row>
              <Col>
              <MapContainer scrollWheelZoom={true}>
                <IncidentMap incidentData={incidentData}/>
              </MapContainer>
                  
              </Col>
          </Row>
          </Container> 
            
        </div>
     );
}
 
export default Scenario2;