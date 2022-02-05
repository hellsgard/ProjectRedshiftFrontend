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
// import Scenario1 from "./Scenario1.jsx";

const Associates = ({forenames, surname, dob}) => {
    const [assocData, setassocData] = useState("");
    const [pageLoaded, setPageLoaded] = useState(false);


    console.log(forenames, "ASSOCIATES");
    console.log("function running");
    const queryPerson = {
        
        surname: surname,
        forenames: forenames,
        dateOfBirth: dob,
        // businessName: workplace

    }; 

    // let surname= suspect.surname;
    // let forenames= suspect.forenames
    // let address= suspect.homeAddress;
    // let dob = suspect.dateOfBirth;

    // const {forenames, surname, dob} = useParams();
  useEffect(() => {
    axios.get('http://localhost:8080/queryPerson/associates/', {params:queryPerson})
      .then((response) => {
        console.log(response);
        setassocData(response.data);
        setPageLoaded(true);
        // setPageLoaded(true);
        console.log(response);
        console.log(assocData);
      }).catch((error) => {
        console.log(error);
      })
  }, []);

    return (
        <div>
            Associates
            {forenames}
            {surname}
            {dob}
        </div>
    )
}


export default Associates;