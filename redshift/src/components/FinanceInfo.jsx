import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
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
export default FinanceInfo;