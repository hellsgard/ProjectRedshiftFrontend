import Navb from './Navb.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Suspect from './Suspect.jsx';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import JWT from '../config/config.json';
import {Link} from 'react-router-dom';
import Scenario2 from './Scenario2.jsx';


const Home = () => {

    // // Creating state for a suspects information
    const [forename, setForename] = useState("");
    const [surname, setSurname] = useState("");
    const [DOB, setDOB] = useState("");
    const [timeDateHigher, setTimeDateHigher] = useState("");
    const [timeDateLower, setTimeDateLower] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [radius, setRadius] = useState("");
    const [vehicleReg, setVehicleReg] = useState("");
    const [fleesTimeStamp, setFleesTimeStamp] = useState("");
    const [suspects, setSuspects] = useState([]);

    const [latitudeRangePlus, setLatitudeRangePlus] = useState("");
    const [latitudeRangeMinus, setLatitudeRangeMinus] = useState("");
    const [longitudeRangePlus, setLongitudeRangePlus] = useState("");
    const [longitudeRangeMinus, setLongitudeRangeMinus] = useState("");



const createQueryPerson = () =>{
    const queryPerson = {
        surname: surname,
        forenames: forename,
        dateOfBirth: DOB
    }; 
    console.log(queryPerson);
    console.log("sending to back end");
    const token = localStorage.getItem(JWT);
    console.log(token);
    axios.get("http://localhost:8080/queryPerson/person", {params: queryPerson, headers: {'Authorization': `Bearer ${token}`}} ) // authorisation header put in here
    .then((response) => {
        console.log(response); 
        console.log("queryperson query")
        
        setData(response);
    })
    .catch((error) => {
        console.log(error);
    })};

   


const createQueryIncident = () => {
    const token = localStorage.getItem(JWT);
    console.log("incident");
    const queryIncident = {
        timeDateLower: timeDateLower,
        timeDateHigher: timeDateHigher,
        latitude: latitude,
        longitude: longitude,
        // radius: radius
    }; 
    console.log(queryIncident);
    console.log("sending to back end");
    axios.get("http://localhost:8080/queryIncident/incident", {params: queryIncident, headers: {'Authorization': `Bearer ${token}`}}) // make this have default radius of 1mile
    .then((response) => {
        console.log(response); 
    })
    .catch((error) => {
        console.log(error);
    })};


    const createQuerySuspectFlees = () => {
        const token = localStorage.getItem(JWT);
        console.log("suspect flees");
        const queryFlees = {
            timestamp: fleesTimeStamp,
            vehicleReg: vehicleReg
        }; 
        console.log(queryFlees);
        console.log("sending to back end");
        axios.get("http://localhost:8080/queryFlees/flees", {params: queryFlees, headers: {'Authorization': `Bearer ${token}`}})
        .then((response) => {
            console.log(response); 
        })
        .catch((error) => {
            console.log(error);
        })};


const clearFields = () => { // this needs to change to reset function from scenario 1
    console.log("function to clear search fields");
}

        function setData(res) {
            setSuspects(res.data);
            
        }

        // const setOne = () => {
        //     const asNumLat = parseFloat(latitude);
        //     const plusOneLat = asNumLat + 0.005;
        //     const minusOneLat = asNumLat - 0.005;
        //     const asNumLon = parseFloat(longitude);
        //     const plusOneLon = asNumLon + 0.005;
        //     const minusOneLon = asNumLon - 0.005;
        //     setLatitudeRangePlus(plusOneLat);
        //     setLatitudeRangeMinus(minusOneLat);
        //     setLongitudeRangePlus(plusOneLon);
        //     setLongitudeRangeMinus(minusOneLon);
        //     return <div>  <Scenario2
        //     latitudeRangePlus={latitudeRangePlus}
        //     latitudeRangeMinus={latitudeRangeMinus}
        //     longitudeRangePlus={longitudeRangePlus}
        //     longitudeRangeMinus={longitudeRangeMinus}
        //     />
        //     </div>

        //   } 
       
 
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
            <input type="text" placeholder="from yyyy-mm-dd hh:mm:ss" name="timeDateLower" value={timeDateLower} onChange={(e) => setTimeDateLower(e.target.value)}></input>
            <input type="text" placeholder="to yyyy-mm-dd hh:mm:ss" name="timeDateHigher" value={timeDateHigher} onChange={(e) => setTimeDateHigher(e.target.value)}></input>
            <input type="text" placeholder="Latitude" name="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)}></input>
            <input type="text" placeholder="Longitude" name="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)}></input>
            {/* <button type="button" setLatPlus={latitudeRangePlus} setLatMinus={latitudeRangeMinus} // it cant get these?!
            setLonPlus={longitudeRangePlus} setLonMinus={longitudeRangeMinus}
            onClick={() => setOne()}>1 mile radius</button> */}
            {/* <button type="button" onClick={() => setFive()}>5 miles radius</button>
            <button type="button" onClick={() => setTen()}>10 miles</button> */}
           
            {/* <input type="number" placeholder="Radius" name="Radius" value={radius} onChange={(e) => setRadius(e.target.value)}></input> */}
            <Link to="/Scenario2">
            <button type="button" onClick={() => createQueryIncident()}>Submit</button>
            </Link>
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