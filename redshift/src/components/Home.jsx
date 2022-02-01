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
<<<<<<< HEAD
             <Nav></Nav>
            <h3>Suspect </h3>
            <h3>Incident </h3>
            <h3>Suspect Flees</h3>
=======
           <h3> Suspect </h3>
            <form>
            <input type="text" placeholder="Forename" name="Forename"></input>
            <input type="text" placeholder="Surname" name="Surname"></input>
            <input type="text" placeholder="DOB" name="DOB"></input>
            <button type="submit" >Submit</button>
            <button >Reset</button> 
            </form>

            <h3> Incident </h3>
            <form>
            <input type="text" placeholder="Time/Date" name="Time/Date"></input>
            <input type="text" placeholder="Location" name="Location"></input>
            <input type="text" placeholder="Radius" name="Radius"></input>
            <button type="submit" >Submit</button>
            <button >Reset</button> 
            </form>

            <h3> Suspect Flees </h3>
            <form>
            <input type="text" placeholder="Vehicle Reg" name="Vehicle Reg"></input>
            <input type="text" placeholder="Time/date" name="Time/date"></input>
            <button type="submit" >Submit</button>
            <button >Reset</button> 
            </form>
    
>>>>>>> 70f79a144000d9382038245aac74ded4fd8f437c
        </div>
     );
}

 
export default Home;