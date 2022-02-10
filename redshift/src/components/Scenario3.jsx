import Navb from "./Navb.jsx";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import JWT from '../config/config.json';
import axios from 'axios';
import Vehicles from "./Vehicles.jsx";
import Scenario3Map from "./Scenario3Map.jsx";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";



const Scenario3 = () => {
const [vehicleReg, setVehicleReg] = useState("");
const [fleesData, setFleesData] = useState([]);
  const [fleesLoaded, setFleesLoaded] =useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [error, setError] = useState(null);

const clearFields = () => {
  console.log("function to clear search fields");
}

const createQueryFlees = () => {
  const token = localStorage.getItem(JWT);
  const queryFlees = {
    vehicleReg: vehicleReg
  };
  axios.get("http://localhost:8080/queryFlees/anpr", {params: queryFlees, headers: {'Authorization': `Bearer ${token}`}})
  .then((response) => {
      console.log(response.data)
      setFleesData(response.data);
      setPageLoaded(true);
  })
  .catch((error) => {
      console.log(error);
  })};


  if (error) {
    return <h1>Something bad</h1>
    } else if (pageLoaded) {
      console.log([fleesData]);
    
    let forenames = fleesData.forenames;
    let surname = fleesData.surname;
    let latitude = fleesData.latitude;
    let longitude = fleesData.longitude;
    let streetName = fleesData.streetName;
    let vehicleRegistrationNumber = fleesData.vehicleRegistrationNumber;
    let make = fleesData.make;
    let model = fleesData.model;
    let timestamp = fleesData.timestamp;
    let driverLicenceID = fleesData.driverLicenceID;
      return (  
        <div>
          
        <Navb></Navb>
        <br></br>
        <h1 class="font-weight-light">
          {" "}
          Suspect: {fleesData[0].forenames} {fleesData[0].surname}{" "} 
          <Container fluid>
         <Row>
              <Col>
              <MapContainer scrollWheelZoom={true}>
                <Scenario3Map fleesData={fleesData}/>
              </MapContainer>
                  
              </Col>
          </Row>
          </Container> 
        </h1>
        </div>
        
        
        
        )
    } else {
  return (
    <div>
      <Navb></Navb>
      {/* <h2 className="centre">Suspect flees the scene of a crime</h2>
        <h4> Please bare with us whilst we work on this</h4>
        <img src="working.png" alt="Work in progress"></img> */}
        <h5>Please enter a vehicle registration</h5>
      <TextField
        id="standard-basic"
        label="Vehicle registration"
        variant="outlined"
        type="text"
        placeholder="Vehicle registration"
        name="Vehicle registration"
        value={vehicleReg}
        onChange={(e) => setVehicleReg(e.target.value)}
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
          onClick={() => createQueryFlees()}
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </Stack>
    </div>
  );
};}

export default Scenario3;
