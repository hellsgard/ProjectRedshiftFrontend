import Navb from './Navb.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Suspect from './Suspect.jsx';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const Home = ({showUser}) => {

    // // Creating state for a suspects information
    const [forename, setForename] = useState("");
    const [surname, setSurname] = useState("");
    const [DOB, setDOB] = useState("");
    const [timeDate, setTimeDate] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [radius, setRadius] = useState("");
    const [vehicleReg, setVehicleReg] = useState("");
    const [fleesTimeStamp, setFleesTimeStamp] = useState("");

    const [suspects, setSuspects] = useState([]);



const createQueryPerson = () =>{
    console.log(showUser); // this is empty :( 
    const queryPerson = {
        surname: surname,
        forenames: forename,
        dateOfBirth: DOB,
        user: showUser
    }; 
    console.log(queryPerson);
    console.log("sending to back end");
    axios.get("http://localhost:8080/queryPerson/person",{params: queryPerson})
    .then((response) => {
        console.log(response); 
        console.log("queryperson query")
        // setSuspects(response.data);
        // console.log(suspects);
        setData(response);
    })
    .catch((error) => {
        console.log(error);
    })};


const createQueryIncident = () => {
    console.log("incident");
    const queryIncident = {
        timeDate: timeDate,
        latitude: latitude,
        longitude: longitude,
        radius: radius
    }; 
    console.log(queryIncident);
    console.log("sending to back end");
    axios.get("http://localhost:8080/queryIncident/incident", {params: queryIncident})
    .then((response) => {
        console.log(response); 
    })
    .catch((error) => {
        console.log(error);
    })};


    const createQuerySuspectFlees = () => {
        console.log("suspect flees");
        const queryFlees = {
            timestamp: fleesTimeStamp,
            vehicleReg: vehicleReg
        }; 
        console.log(queryFlees);
        console.log("sending to back end");
        axios.get("http://localhost:8080/queryFlees/flees", {params: queryFlees})
        .then((response) => {
            console.log(response); 
        })
        .catch((error) => {
            console.log(error);
        })};


const clearFields = () => {
    console.log("function to clear search fields");
}

        function setData(res) {
            setSuspects(res.data);
            
        }

    return ( 
        <div>
             <Navb></Navb>


            <div>
                <br>
                </br>
            </div>
           <h3> Search citizen database </h3>

          

            <Form>
            <input type="text" placeholder="Forename" name="Forename" value={forename} onChange={(e) => setForename(e.target.value)}></input>
            <input type="text" placeholder="Surname" name="Surname" value={surname} onChange={(e) => setSurname(e.target.value)}></input>
            <input type="text" placeholder="yyyy-mm-dd" name="DOB" value={DOB} onChange={(e) => setDOB(e.target.value)}></input>
            <button type="button" onClick={() => createQueryPerson()}>Submit</button>
            <button id="reset" onClick={() => clearFields()}>Reset</button> 
            </Form>

            <h3> Incident </h3>
            <form>
            <input type="text" placeholder="Timestamp" name="Time/Date" value={timeDate} onChange={(e) => setTimeDate(e.target.value)}></input>
            <input type="text" placeholder="Latitude" name="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)}></input>
            <input type="text" placeholder="Longitude" name="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)}></input>
            <input type="number" placeholder="Radius" name="Radius" value={radius} onChange={(e) => setRadius(e.target.value)}></input>
            <button type="button" onClick={() => createQueryIncident()}>Submit</button>
            <button id="reset" onClick={() => clearFields()}>Reset</button> 
            </form>

            <h3> Suspect Flees </h3>
            <form>
            <input type="text" placeholder="Vehicle Reg" name="Vehicle Reg" value={vehicleReg} onChange={(e) => setVehicleReg(e.target.value)}></input>
            <input type="text" placeholder="Timestamp" name="Time/date" value={fleesTimeStamp} onChange={(e) => setFleesTimeStamp(e.target.value)}></input>
            <button type="button" onClick={() => createQuerySuspectFlees()}>Submit</button>
            <button id="reset" onClick={() => clearFields()}>Reset</button> 
            </form>
    
        <Row >    
            {suspects.map((suspect) => {  
                return(
                    
                    <Col>
                        <Suspect 
                        citizenID={suspect.citizenID} 
                        forenames={suspect.forenames} 
                        surname={suspect.surname} 
                        homeAddress={suspect.homeAddress} 
                        dateOfBirth={suspect.dateOfBirth} 
                        placeOfBirth={suspect.placeOfBirth} 
                        sex={suspect.sex}/>        
                    </Col>
            )})}
        </Row>
                
            
                
            {/* {suspects.map((suspect) => {  
                        return <Suspect forenames={suspect.forenames} surname={suspect.surname} homeAddress={suspect.homeAddress} dateOfBirth={suspect.dateOfBirth} placeOfBirth={suspect.placeOfBirth} sex={suspect.sex}/>     
            })} */}
                
            


        </div>
     );
    }

 
export default Home;