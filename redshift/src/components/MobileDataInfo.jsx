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
                        <h4 class="font-weight-normal">Calls received:</h4>
                        {inboundCalls.map((recordIn) => {
                          return (
                            <div>
                              <Card style={{ width: '18rem' }}>
                                <p class="font-weight-light">Caller name: {recordIn.forenames} {recordIn.surname} </p>
                                <p class="font-weight-light">DoB: {recordIn.dateOfBirth}</p>
                                <p class="font-weight-light">Address: {recordIn.address}</p>
                                <p class="font-weight-light">TimeStamp: {recordIn.timestamp}</p>
                                <p class="font-weight-light">Caller Number: {recordIn.phoneNumber}</p>
                              </Card>
                            </div>
                          )
                        })}
                      </Col>

                      <Col>
                      <h4 class="font-weight-normal">Calls made:</h4>
                        {outboundCalls.map((record) => {
                          return (
                            <div>
                              <Card style={{ width: '18rem' }}>
                                <p class="font-weight-light">Receiver name: {record.forenames} {record.surname}</p>
                                <p class="font-weight-light">DoB: {record.dateOfBirth}</p>
                                <p class="font-weight-light">Address: {record.address}</p>
                                <p class="font-weight-light">TimeStamp: {record.timestamp}</p>
                                <p class="font-weight-light">Receiver Number: {record.phoneNumber}</p>
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