import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Spinner } from 'react-bootstrap';

const MobileDataInfo = ({ forenames, surname, dateOfBirth }) => {


    const [mobileRecords, setmobileRecords] = useState("");
    const [pageLoaded, setPageLoaded] = useState(false);
    const [inboundCallRecords, setInboundCallRecords] = useState([]);
    const [outboundCallRecords, setOutboundCallRecords] = useState([]);
    const [error, setError] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [queryInfoState, setQueryInfoState] = useState(0);


    const queryInfo = {
        forenames: forenames,
        surname: surname,
        dateOfBirth: dateOfBirth,
    }

    useEffect(() => {

        if (queryInfo.forenames == undefined) {
            setTimeout(10000);
            setQueryInfoState(queryInfoState + 1);
        } else {
            getMobileRecords(queryInfo);
        };
    }, []);

    const getMobileRecords = ((queryInfo) => {
        axios.get(`http://localhost:8080/queryPerson/mobile`, { params: queryInfo })
            .then((response) => {
                setmobileRecords(response.data[0]);
                setPhoneNumber(response.data[0].phoneNumber);
                const info = response.data[0];
                getCallRecords(info);
                getOutboundCallRecords(info);
            }
            ).catch((error) => {
                setError(error);
            })
    })


    const getCallRecords = (async (info) => {
        axios.get(`http://localhost:8080/queryPerson/callRecords`, { params: info })
            .then((response) => {
                console.log(response.data);
                setInboundCallRecords(response.data);
                setPageLoaded(true);
            });
    });


    const getOutboundCallRecords = (async (info) => {
        await axios.get(`http://localhost:8080/queryPerson/callRecordsOutbound`, { params: info })
            .then((response) => {
                setOutboundCallRecords(response.data);
                console.log(response.data);
            })
    });


    if (error == true) {
        return <h2> Oops, theres been an error :o please refresh the page </h2>
    } else if (!pageLoaded) { // Loaded is not true / false
        return <div><h2> Please wait, data is loading! </h2>
            <Spinner animation="border" variant="danger" />
            </div>
    } else {
        return (
            <div>
                <h4>Phone Number: {mobileRecords.phoneNumber}</h4>
                <Row>
                    <Col>
                        <h3>Inbound</h3>
                        {inboundCallRecords.map((record) => {
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
                        {outboundCallRecords.map((record) => {
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