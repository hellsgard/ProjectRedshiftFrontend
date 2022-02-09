import axios from 'axios';
import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Vehicles = ({anprData}) => {
    // const [anprData, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    return (
        <div>

            <Row>
                  <Col>
              
                    <h3>Vehicle Data {anprData.length && anprData[0].vehicleRegistrationNumber}</h3>
          
                        <div>
                          <Card style={{ width: '30rem' }}>
                            <p>Drivers License: {anprData.length && anprData[0].driverLicenceID}</p>
                            <p>Make: {anprData.length && anprData[0].make}</p>
                            <p>Model: {anprData.length && anprData[0].model}</p>
                            <p>Colour: {anprData.length && anprData[0].colour}</p>
                          </Card>
                        </div>
               
                  </Col>

                  <Col>
                    <h3>ANPR Data</h3>
                    {anprData.map((data) => {
                      return (
                        <div>
                          <Card style={{ width: '30rem' }}>
                            <p>Street Name: {data.streetName}</p>
                            <p>Latitude: {data.latitude}</p>
                            <p>Longitude: {data.longitude}</p>
                            <p>Timestamp: {data.timestamp}</p>
                          </Card>
                        </div>
                      )
                    })}
                  </Col>

                </Row>


        </div>

    )
}

export default Vehicles;