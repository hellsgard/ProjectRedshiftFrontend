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



const Scenario2 = () => {

    const [timeDate, setTimeDate] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [radius, setRadius] = useState("");
    const [incidentData, setIncidentData] = useState([]);

    const createQueryIncident = () => {
        const token = localStorage.getItem(JWT);
        console.log("incident");
        const queryIncident = {
            timeDate: timeDate,
            latitude: latitude,
            longitude: longitude,
            radius: radius
        }; 
        console.log(queryIncident);
        console.log("sending to back end");
        axios.get("http://localhost:8080/queryIncident/incidentVehicle", {params: queryIncident, headers: {'Authorization': `Bearer ${token}`}})
        .then((response) => {
            console.log(response); 
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
            <h1> This is the page for scenario 2 </h1>


            <h3> Incident </h3>
            <form>
            <input type="text" placeholder="Timestamp" name="Time/Date" value={timeDate} onChange={(e) => setTimeDate(e.target.value)}></input>
            <input type="text" placeholder="Latitude" name="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)}></input>
            <input type="text" placeholder="Longitude" name="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)}></input>
            <input type="number" placeholder="Radius" name="Radius" value={radius} onChange={(e) => setRadius(e.target.value)}></input>
            <Link to="/Scenario2">
            <button type="button" onClick={() => createQueryIncident()}>Submit</button>
            </Link>
            <button id="reset" onClick={() => clearFields()}>Reset</button> 
            </form>

            <Container fluid>
         <Row>
          <Col>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <div>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Vehicles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"> Associates </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Financial information</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Call records</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Vehicle</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  </div>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <IncidentVehicles incidentData={incidentData}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" title="Associates">
                      
                      <p> </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
             
                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                       
                      
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            
              </Col>
              <Col>
                  
                  
              </Col>
          </Row>
          </Container> 
            
        </div>
     );
}
 
export default Scenario2;