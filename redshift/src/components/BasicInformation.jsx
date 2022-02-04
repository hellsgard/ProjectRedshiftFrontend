import { useEffect, useState } from "react";
    import axios from 'axios';
    import Scenario1 from "./Scenario1";
    import Button from 'react-bootstrap/Button';

const BasicInformation = () => {

        // Our state is going to be the data we pull from the api
        const [basicData, setBasicData] = useState([]);
    
        // State to check if the API has errored
        const [error, setError] = useState(null);
    
        // State to check if the data has loaded
        const [loaded, setLoaded] = useState(false);
    
        let tempId;
    
        useEffect(() => {
            
                axios.get("http://localhost:8080/suspectProfile/basicInfo/8919931132") // this needs to change
                .then((response) => {
                console.log("=======BasicData==========");
                console.log(response);
                // What does the data look like when pulling it
                setBasicData(response.data)
                console.log("=======BasicData==========");
                console.log(basicData);
                console.log(response.data);
                setLoaded(true);
            }).catch((error) => {
                setLoaded(true);
                setError(error);
            }).then(() => { 
                console.log("===========================");
                console.log("=======BasicData==========");
                console.log(basicData);
            });
        },[]);
        
        if(error == true) {
            return <h2> Oops, We have run into an error :o please refresh the page </h2>
        } else if(!loaded ) { 
            return <h2> Please wait, data is loading! </h2>
        } else {
            return (
                <div>
                    <h2> Loads if the data is fine! </h2>

                    {basicData.map((basic) => {
                        console.log(`name: ${basic.name}`);
                        return <BasicInformation forename={basic.forenames} surname={basic.surname} address={basic.homeAddress} dob={basicData.dateOfBirth} sex={basicData.sex} passportNumber={basicData.passportNumber} nationality={basicData.nationality} placeOfBirth={basicData.placeOfBirth}/>
                    })}
                </div>
            )
        }
             
    }
 
export default BasicInformation;