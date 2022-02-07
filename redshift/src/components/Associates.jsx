import Navb from "./Navb.jsx";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Map from "./Map.jsx";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import { ListGroup } from "react-bootstrap";
// import Scenario1 from "./Scenario1.jsx";

const Associates = ({forenames, surname, dob }) => {
    const [assocData, setAssocData] = useState([]);
    const [pageLoaded, setPageLoaded] = useState(false);


    console.log(forenames, "ASSOCIATES WHY WONT YOU WORK!!!!");
    console.log("function running");


    let queryPerson = {
        
        surname: surname,
        forenames: forenames,
        dateOfBirth: dob,
        // businessName: workplace

    }; 

    console.log({queryPerson});

    // let surname= suspect.surname;
    // let forenames= suspect.forenames
    // let address= suspect.homeAddress;
    // let dob = suspect.dateOfBirth;

    // const {forenames, surname, dob} = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8080/queryPerson/associates/`,{params: queryPerson})
      .then(({response}) => {
        console.log(response);
        setAssocData([response.data]);
        setPageLoaded(false);
        // setPageLoaded(true);
        console.log(response);
        console.log(assocData, "WAT IS THIS");
      }).catch((error) => {
        console.log(error);
      })
  }, );

    let forename = assocData.forenames;
    let lastname = assocData.surname;
    let homeAddress = assocData.homeAddress;
    let dateOfBirth = assocData.dateOfBirth;
    let businessName = assocData.businessName;
    let workAddress = assocData.businessAddress;

    // assocData.map()

    
    // console.log({workplace});
    


    return (

            <div className="colleagues">
                {assocData.map((colleagues) => (
                    <div className="colleagues">{colleagues.forenames} {colleagues.workplace} {console.log(colleagues)}</div>
                ))}

        {/* {assocData.map(assocData => ( */}

            <h1>List of colleagues

            </h1>
           
            {/* Associates
            {forenames}
            {surname}
            {dob}
            {workplace}
            {assocData} */}
            </div>
 
    )
}


export default Associates;