import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const FinanceInfo = ({citizenID, bank, accountNumber, vendor, amount, timestamp}) => {
    let FinancialInfo = `/Scenario1/${citizenID}`;
    return ( 
        <div>
            
        <Card style={{width: '25rem'}}>
            <h5> Bank Name: {bank} </h5>
            <h5> Bank Account Number: {accountNumber} </h5>
            <h5> Vendor: {vendor} </h5>
            <h5> Amount Paid: {amount} </h5>
            <h5> Time of Transaction: {timestamp} </h5>
            
            

            <Link to={FinancialInfo}>
                {/* <Button type="button" onClick={() => {
                    <Link to={profilePage}></Link>
                
                }}>Profile</Button> */}
                profile
            </Link>


            

        </Card>
                    
                
        </div>
     );
}
 
export default FinanceInfo;