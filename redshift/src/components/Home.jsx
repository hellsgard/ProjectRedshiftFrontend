import Nav from './Nav.jsx';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {

    // // Creating state for a suspects information
    const [forename, setForename] = useState("");
    const [surname, setSurname] = useState("");
    const [DOB, setDOB] = useState("");



const createQueryPerson = () =>{
    console.log("function running");
    const queryPerson = {
        surname: surname,
        forenames: forename,
        dateOfBirth: DOB
    }; 
    console.log(queryPerson);
    console.log("sending to back end");
    axios.get("http://localhost:8080/queryPerson/person",{params: queryPerson})
    .then((response) => {
        console.log(response); 
    })
    .catch((error) => {
        console.log(error);
    })};


const createQueryIncident = () => {
    console.log("incident");
    // const queryIncident = {
    // };
    // console.log(queryIncident);
}

const createQuerySuspectFlees = () => {
    console.log("suspect flees");
    // const querySuspectFlees = {
    // }
}
const clearFields = () => {
    console.log("function to clear search fields");
}

    return ( 
        <div>
             <Nav></Nav>
            

           <h3> Suspect in custody</h3>
            <form>
            <input type="text" placeholder="Forename" name="Forename" value={forename} onChange={(e) => setForename(e.target.value)}></input>
            <input type="text" placeholder="Surname" name="Surname" value={surname} onChange={(e) => setSurname(e.target.value)}></input>
            <input type="text" placeholder="yyyy-dd-mm" name="DOB" value={DOB} onChange={(e) => setDOB(e.target.value)}></input>
            <button type="button" onClick={() => createQueryPerson()}>Submit</button>
            <button id="reset" onClick={() => clearFields()}>Reset</button> 
            </form>

            <h3> Incident </h3>
            <form>
            <input type="text" placeholder="Time/Date" name="Time/Date"></input>
            <input type="text" placeholder="Location" name="Location"></input>
            <input type="number" placeholder="Radius" name="Radius"></input>
            <button type="button" onClick={() => createQueryIncident()}>Submit</button>
            <button id="reset" onClick={() => clearFields()}>Reset</button> 
            </form>

            <h3> Suspect Flees </h3>
            <form>
            <input type="text" placeholder="Vehicle Reg" name="Vehicle Reg"></input>
            <input type="text" placeholder="Time/date" name="Time/date"></input>
            <button type="button" onClick={() => createQuerySuspectFlees()}>Submit</button>
            <button id="reset" onClick={() => clearFields()}>Reset</button> 
            </form>

        </div>
     );
}

 
export default Home;