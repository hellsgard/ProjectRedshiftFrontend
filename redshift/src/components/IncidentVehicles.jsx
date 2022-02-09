import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Spinner } from 'react-bootstrap';


const incidentVehicle = ({incidentData})  => {

    return (
        <div>


            {incidentData.map((vehicle) => {
                return(
                    <div>

                        <Card style={{ width: '18rem' }}>
                            <p>forenmaes: {vehicle.forenames}</p>
                            <p>surname: {vehicle.surname}</p>
                            <p>DoB: {vehicle.dateOfBirth}</p>
                            <p>Reg: {vehicle.vehicleRegistrationNumber}</p>
                            <p>time: {vehicle.timestamp}</p>
                            <p>Make: {vehicle.make}</p>
                            <p>Model: {vehicle.model}</p>

                        </Card>
                    </div>
                )
            })}


        </div>
    )
}

export default incidentVehicle;