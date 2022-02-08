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
    const [queryInfoState1, setQueryInfoState1] = useState(0);

    // let queryPerson = {
        
    //     surname: suspect.surname,
    //     forenames: suspect.forenames,
    //     dateOfBirth: suspect.dateOfBirth,
    //     // businessName: workplace
    // }; 

    let queryPerson = {};

    useEffect( () =>{
        getAssociates(suspect);
    
    }, []);



    const getAssociates = (async (suspect) => {

    await axios.get(`http://localhost:8080/queryPerson/associates`,{params: suspect})
      .then((response) => {
        console.log(response.data);
        setAssocData(response.data);
        setPageLoaded(false);
      }).catch((error) => {
          console.log("ERROR :(")
      })
    })
//   useEffect(() => {
//       console.log(queryPerson);
//     axios.get(`http://localhost:8080/queryPerson/associates/`,{params: queryPerson})
//       .then((response) => {
//         setAssocData(response.data);
//         setPageLoaded(false);
//       }).catch((error) => {
//           console.log("ERROR :(")
//       })
//   },[]);

    
    return (

        // <h1>TEST</h1>
            <div className="colleagues">
                {assocData.map((colleagues) => (
                    <div className="colleagues">
                        {colleagues.forenames}
                        {colleagues.businessName} 
                        
                        </div>
                ))}

            </div>
 
    )
}


export default Associates;