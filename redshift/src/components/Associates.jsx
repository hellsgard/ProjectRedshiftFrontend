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

const Associates = ({suspect}) => {
    const [assocData, setAssocData] = useState([]);
    const [pageLoaded, setPageLoaded] = useState(false);

    let queryPerson = {
        
        surname: suspect.surname,
        forenames: suspect.forenames,
        dateOfBirth: suspect.dateOfBirth,
        // businessName: workplace

    }; 

  useEffect(() => {
    axios.get(`http://localhost:8080/queryPerson/associates/`,{params: queryPerson})
      .then((response) => {
        setAssocData(response.data);
        setPageLoaded(false);
      }).catch((error) => {
          console.log("ERROR :(")
      })
  },[]);

    // let forename = assocData.forenames;
    // let lastname = assocData.surname;
    // let homeAddress = assocData.homeAddress;
    // let dateOfBirth = assocData.dateOfBirth;
    // let businessName = assocData.businessName;
    // let workAddress = assocData.businessAddress;

    // assocData.map()

    
    // console.log({workplace});
    


    return (


        // <h1>TEST</h1>
            <div className="colleagues">
                {assocData.map((colleagues) => (
                    <div className="colleagues">{colleagues.forenames} {colleagues.businessName} {console.log(colleagues)}</div>
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