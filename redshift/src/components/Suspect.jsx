import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';





const Suspect = ({citizenID, forenames, surname, homeAddress, dateOfBirth, placeOfBirth, sex}) => {
    let profilePage = `/Scenario1/${citizenID}`;
    return ( 
        <div>
            
        <Card style={{width: '25rem'}}>
            <h5> Forename: {forenames} </h5>
            <h5> Surname: {surname} </h5>
            <h5> Address: {homeAddress} </h5>
            <h5> Date of Birth: {dateOfBirth} </h5>
            <h5> Place of Birth: {placeOfBirth} </h5>
            <h5> Sex: {sex} </h5>
            
            

            <Link to={profilePage}>
                {/* <Button type="button" onClick={() => {
                    <Link to={profilePage}></Link>
                
                }}>Profile</Button> */}
                profile
            </Link>


            

        </Card>
                    
                
        </div>
     );
}
 
export default Suspect;