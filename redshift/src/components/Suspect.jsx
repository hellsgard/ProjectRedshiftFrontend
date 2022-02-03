import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';



const Suspect = ({citizenID, forenames, surname, homeAddress, dateOfBirth, placeOfBirth, sex}) => {
    return ( 
        <div>
            
        <Card style={{width: '25rem'}}>
            <h5> Forename: {forenames} </h5>
            <h5> Surname: {surname} </h5>
            <h5> Address: {homeAddress} </h5>
            <h5> Date of Birth: {dateOfBirth} </h5>
            <h5> Place of Birth: {placeOfBirth} </h5>
            <h5> Sex: {sex} </h5>
        </Card>
                    
                
        </div>
     );
}
 
export default Suspect;