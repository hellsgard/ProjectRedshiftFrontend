import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Spinner } from 'react-bootstrap';

const MobileDataInfo = ({ inboundCalls, outboundCalls }) => {


    const [mobileRecords, setmobileRecords] = useState("");
    const [pageLoaded, setPageLoaded] = useState(false);
    const [inboundCallRecords, setInboundCallRecords] = useState([]);
    const [outboundCallRecords, setOutboundCallRecords] = useState([]);
    const [error, setError] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [queryInfoState, setQueryInfoState] = useState(0);


    


        return (
            <div>
                <h4>Phone Number: {mobileRecords.phoneNumber}</h4>
                <Row>
                      <Col>
                        <h3>Inbound</h3>
                        {inboundCalls.map((recordIn) => {
                          return (
                            <div>
                              <Card style={{ width: '30rem' }}>
                                <p>Caller name: {recordIn.forenames} {recordIn.surname}</p>
                                <p>DoB: {recordIn.dateOfBirth}</p>
                                <p>Address: {recordIn.address}</p>
                                <p>TimeStamp: {recordIn.timestamp}</p>
                                <p>Caller Number: {recordIn.phoneNumber}</p>
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
                                <p>Receiver Number: {record.phoneNumber}</p>
                              </Card>
                            </div>
                          )
                        })}
                      </Col>
                    </Row>


            </div>
        )
    }

export default MobileDataInfo;