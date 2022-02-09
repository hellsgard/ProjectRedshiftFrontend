import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
<<<<<<< HEAD
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import JWT from '../config/config.json';

const FinanceInfo = ({ forenames, surname, dateOfBirth, citizenID }) => {

    const [pageLoaded, setPageLoaded] = useState(false);
    const [eposInfo, setEposInfo] = useState([]);
    const [queryInfoState, setQueryInfoState] = useState(0);
    const [error, setError] = useState(null);

    const queryInfo = {
        forenames: forenames,
        surname: surname,
        dateOfBirth: dateOfBirth,
        citizenID: citizenID,
    }

    useEffect(() => {

        if (queryInfo.forenames == undefined) {
            setTimeout(10000);
            setQueryInfoState(queryInfoState + 1);
        } else {
            console.log("getting data finance")
            getEposInfo(queryInfo);
        };
    }, [queryInfoState]);

    const getEposInfo = ((queryInfo) => {
        const token = localStorage.getItem(JWT);
        console.log(queryInfo)
        axios.get(`http://localhost:8080/queryPerson/financialEpos`, { params: queryInfo, headers: {'Authorization': `Bearer ${token}`}})
            .then((response) => {
                console.log("testing")
                setEposInfo(response.data);
                const info = (response.data);
                console.log("FINANCE STUFF HERE")
                console.log(info);
                setPageLoaded(true);
            }
            ).catch((error) => {
                setError(error);
            });
    })

    if (error == true) {
        return <h2> Oops, theres been an error :o please refresh the page </h2>
    } else if (!pageLoaded) { // Loaded is not true / false
        return <h2> Please wait, data is loading! </h2>
    } else {
        return (
            <div>
                <h3>Epos Data</h3>
                {eposInfo.map((record) => {
                    return (
                        <div>
                            <Card style={{ width: '25rem' }}>
                                <h5> Bank Name: {record.bank} </h5>
                                <h5> Bank Account Number: {record.accountNumber} </h5>
                                <h5> Vendor: {record.vendor} </h5>
                                <h5> Amount Paid: {record.amount} </h5>
                                <h5> Time of Transaction: {record.timestamp} </h5>
                            </Card>
                        </div>
                    )
                })}

            </div>
        )
    }
}

=======
const FinanceInfo = ({ eposData, atmData }) => {

    return (
        <div>
            <Row>
                <Col>
                    <h3>Epos Data</h3>
                    {eposData.map((data) => {
                        return (
                            <div>
                                <Card style={{ width: '30rem' }}>
                                    <h5> Bank Name: {data.bank} </h5>
                                    <h5> Bank Account Number: {data.accountNumber} </h5>
                                    <h5> Vendor: {data.vendor} </h5>
                                    <h5> Amount Paid: {data.amount} </h5>
                                    <h5> Time of Transaction: {data.timestamp} </h5>
                                </Card>
                            </div>
                        )
                    })}
                </Col>
                <Col>
                    <h3>ATM Data</h3>
                    {atmData.map((data) => {
                        return (
                            <div>
                                <Card style={{ width: '30rem' }}>
                                    <p>Card Number: {data.cardNumber}</p>
                                    <p>ATM ID: {data.atmId}</p>
                                    <p>Amount: {data.amount}</p>
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
    )}
>>>>>>> 0f1064f0777f53fc5531032213f0d6c3fefd62ac
export default FinanceInfo;