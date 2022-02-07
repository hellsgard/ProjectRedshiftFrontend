import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const CallRecords = ({citizenID, phoneNumber, network, callerMsisdn, receiverMsisdn, timestamp}) => {
    let CallRecords = `/Scenario1/${citizenID}`;
    return ( 
        <div>
            
        <Card style={{width: '25rem'}}>
            <h5> phoneNumber: {phoneNumber} </h5>
            <h5> network: {network} </h5>
            <h5> callerMsisdn: {callerMsisdn} </h5>
            <h5> receiverMsisdn: {receiverMsisdn} </h5>
            <h5> timestamp: {timestamp} </h5>
            
            

            <Link to={CallRecords}>
                {/* <Button type="button" onClick={() => {
                    <Link to={profilePage}></Link>
                
                }}>Profile</Button> */}
                profile
            </Link>


            

        </Card>
                    
                
        </div>
     );
}
 
export default CallRecords;