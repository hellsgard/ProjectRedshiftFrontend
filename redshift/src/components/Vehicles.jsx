import axios from 'axios';
import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Vehicles = () => {
    const [anprData, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    return (
        <div>
            <h4>Vehicle Registration: {anprData.vehicleRegistrationNumber}</h4>
            <Row>
                  <Col>
                    <h3>Vehicle Data</h3>
                    {anprData.map((data) => {
                      return (
                        <div>
                          <Card style={{ width: '30rem' }}>
                            <p>Drivers License: {data.driverLicenceID}</p>
                            <p>Make: {data.make}</p>
                            <p>Model: {data.model}</p>
                            <p>Colour: {data.colour}</p>
                          </Card>
                        </div>
                      )
                    })}
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