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
            <h1> Scenario2 - Suspect Flees</h1>


            <h3> Find Suspect</h3>
            <form>
            <input type="text" placeholder="Timestamp" name="Time/Date" value={timeDate} onChange={(e) => setTimeDate(e.target.value)}></input>
            <input type="text" placeholder="Latitude" name="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)}></input>
            <input type="text" placeholder="Longitude" name="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)}></input>
            <input type="number" placeholder="Seconds" name="Seconds" value={seconds} onChange={(e) => setSeconds(e.target.value)}></input>
            <input type="number" placeholder="Distance - 0.1, 0.01" name="Distance" value={distance} onChange={(e) => setDistance(e.target.value)}></input>
            <Link to="/Scenario2">
            <button type="button" onClick={() => createQueryIncident()}>Submit</button>
            </Link>
            <button id="reset" onClick={() => clearFields()}>Reset</button> 
            </form>

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