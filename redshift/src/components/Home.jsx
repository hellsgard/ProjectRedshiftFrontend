import Nav from './Nav.jsx';

const Home = () => {

    // // Creating state for a suspects information
    // const [Forename, setForename] = useState("");
    // const [Surename, setSurename] = useState("");
    // const [DOB, setDOB] = useState("");

const createQueryPerson = () =>{
    const surname = document.getElementById("Forename").value;
    let surnameValue =""; // this gets rid of the cannot read properties of null reading top but is very wordy!
    if(surname) {
        surnameValue = surname.value;
    }
    const queryPerson = {
    surname: surnameValue,
    // forenames: document.querySelector("Surname").value,
    // dateOfBirth: document.querySelector("DOB").value
}; 
console.log(queryPerson);
    }

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


//  to try and get information into backend for prepared statement
// useEffect(() => {
//     console.log("function running");
//     axios.post (whataddress? a temporary file?, queryPerson)
//     .then((response) => {
//         console.log(response);  // need to destructure data
//         setBankAccountData(response.data);
//         console.log(bankAccountData); 
//         setLoaded(true);
//         console.log(response); 
//     }).catch((error) => {
//         setLoaded(true);
//         setError(error);
//     })},[]);




    // let SuspectForename;
    // let SuspectSurename;
    // let SuspectDOB;

    return ( 
        <div>
             <Nav></Nav>
            

           <h3> Suspect in custody</h3>
            <form>
            <input type="text" placeholder="Forename" name="Forename" id="Forename"></input>
            <input type="text" placeholder="Surname" name="Surname" id="Surname"></input>
            <input type="text" placeholder="yyyy-dd-mm" name="DOB" id="DOB"></input>
            <button type="submit" onClick={() => createQueryPerson()}>Submit</button>
            <button id="reset" onClick={() => clearFields()}>Reset</button> 
            </form>

            <h3> Incident </h3>
            <form>
            <input type="text" placeholder="Time/Date" name="Time/Date"></input>
            <input type="text" placeholder="Location" name="Location"></input>
            <input type="number" placeholder="Radius" name="Radius"></input>
            <button type="submit" onClick={() => createQueryIncident()}>Submit</button>
            <button id="reset" onClick={() => clearFields()}>Reset</button> 
            </form>

            <h3> Suspect Flees </h3>
            <form>
            <input type="text" placeholder="Vehicle Reg" name="Vehicle Reg"></input>
            <input type="text" placeholder="Time/date" name="Time/date"></input>
            <button type="submit" onClick={() => createQuerySuspectFlees()}>Submit</button>
            <button id="reset" onClick={() => clearFields()}>Reset</button> 
            </form>

        </div>
     );
}

 
export default Home;