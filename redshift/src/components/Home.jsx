import Nav from './Nav.jsx';

const Home = () => {

    // // Creating state for a suspects information
    // const [Forename, setForename] = useState("");
    // const [Surename, setSurename] = useState("");
    // const [DOB, setDOB] = useState("");


    let SuspectForename;
    let SuspectSurename;
    let SuspectDOB;

    return ( 
        <div>
           <h3> Suspect </h3>
            <input type="text" placeholder="Forename" name="Forename"></input>
            <input type="text" placeholder="Surname" name="Surname"></input>
            <input type="text" placeholder="DOB" name="DOB"></input>
            <button type="submit" >Login</button>
            <button >Reset</button> 
            <h3> Incident </h3>
            <input type="text" placeholder="Time/Date" name="Time/Date"></input>
            <input type="text" placeholder="Location" name="Location"></input>
            <input type="text" placeholder="Radius" name="Radius"></input>
            <button type="submit" >Login</button>
            <button >Reset</button> 
            <h3> Suspect Flees </h3>
            <input type="text" placeholder="Vehicle Reg" name="Vehicle Reg"></input>
            <input type="text" placeholder="Time/date" name="Time/date"></input>
            <button type="submit" >Login</button>
            <button >Reset</button> 
    
        </div>
     );
}
 
export default Home;