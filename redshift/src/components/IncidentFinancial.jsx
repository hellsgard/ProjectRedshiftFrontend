import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Spinner } from 'react-bootstrap';



const incidentFinancial = ({incidentData}) => {

    console.log(incidentData);


    if (incidentData[1] === undefined) {
        return (
            <p>Loading</p>
        )
    } else {
        return (
            <div>
    
                {incidentData[0].map((financial) => {
                    return (
                        <div>
                            <Card style={{ width: '18rem' }}>  
                                <p>forenmaes: {financial.forenames}</p>
                                <p>surname: {financial.surname}</p>
                                <p>DoB: {financial.dateOfBirth}</p>
                                <p>DoB: {financial.homeAddress}</p>
                                <p>Time: {financial.timestamp}</p>
                                <p>Sort Code: {financial.sortCode}</p>
                                <p>Operator: {financial.operator}</p>
                                <p>Account Number: {financial.accountNumber}</p>
                            </Card>  
                        </div>
                    )
                })}
    
    
            </div>
        )
    }
    }
    

export default incidentFinancial;