import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MobileDataInfo = ( {inboundCalls, outboundCalls, callRecordsLoaded, error} ) => {


    console.log(inboundCalls);
    console.log(outboundCalls);

    if (error == true) {
        return <h2> Oops, theres been an error :o please refresh the page </h2>
    } else if (callRecordsLoaded == false) { // Loaded is not true / false
        return <h2> Please wait, data is loading! </h2>
    } else {
        return (
            <div>
                <Row>
                    <Col>
                        <h3>Inbound</h3>
                        {inboundCalls.map((record) => {
                            return (
                                <div>
                                    <Card style={{ width: '30rem' }}>
                                        <p>Caller name: {record.forenames} {record.surname}</p>
                                        <p>DoB: {record.dateOfBirth}</p>
                                        <p>Address: {record.address}</p>
                                        <p>TimeStamp: {record.timestamp}</p>
                                        <p>Caller Number: {record.callerMSISDN}</p>
                                    </Card>
                                </div>
                            )
                        })}
                    </Col>

                    <Col>
                        <h3>Outbound</h3>
                        {outboundCalls.map((record) => {
                            return (
                                <div>
                                    <Card style={{ width: '30rem' }}>
                                        <p>Receiver name: {record.forenames} {record.surname}</p>
                                        <p>DoB: {record.dateOfBirth}</p>
                                        <p>Address: {record.address}</p>
                                        <p>TimeStamp: {record.timestamp}</p>
                                        <p>Receiver Number: {record.callerMSISDN}</p>
                                    </Card>
                                </div>
                            )
                        })}
                    </Col>
                </Row>


            </div>
        )
    }
}
export default MobileDataInfo;