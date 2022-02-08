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
import {Link} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import AssociateTab from "./AssociateTab.jsx";
// import Button from 'react-bootstrap/Button'
// import Scenario1 from "./Scenario1.jsx";

const Associates = ({suspect}) => {
    const [assocData, setAssocData] = useState([]);
    const [pageLoaded, setPageLoaded] = useState(false);

    // let queryPerson = {
        
    //     surname: suspect.surname,
    //     forenames: suspect.forenames,
    //     dateOfBirth: suspect.dateOfBirth,
    //     // businessName: workplace
    // }; 

    // console.log("queryperson", {queryPerson});

  useEffect(() => {
  
        axios.get(`http://localhost:8080/queryPerson/associates/`,{params: suspect})
        .then((response) => {
            setAssocData(response.data);
            setPageLoaded(false);
            }
            ).catch((error) => {
                console.log(error);
            })
        },[suspect]);
    
 
    return (
            <div>
                <div>
                    <h4 class="font-weight-light"> Works at: {assocData.length && assocData[0].businessName} </h4>
                    <h5 class="font-weight-light"> Address: {assocData.length && assocData[0].businessAddress}</h5>
                    <br></br>
                    <h5 class="font-weight-light"> Full employee list:</h5>
                </div>
                
                    {assocData.length && assocData.map((colleagues) => {
                            return (
                                <div>
                                {/* {assocData[0].businessName} */}

                                <ListGroup variant="flush">
                                    <ListGroup.Item class="font-weight-light">{colleagues.forenames}  {colleagues.surname}{' '} 
                                    {/* <Link to={`/Scenario1/${colleagues.citizenID}`}>
                                        profile
                                    </Link> */}
                                    <Button href={`/Scenario1/${colleagues.citizenID}`}variant="secondary" size="sm">
                                    profile
                                    </Button>

                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        
                                    </ListGroup.Item>
                                    {/* <ListGroup.Item class="font-weight-light"></ListGroup.Item>
                                    <ListGroup.Item class="font-weight-light">
                                        
                                    </ListGroup.Item> */}
                                    {/* <ListGroup.Item>horizontally!</ListGroup.Item> */}
                                    </ListGroup>
                              
                                </div>
                                
                            )
                        })}

                                <div>
                                {/* <AssociateTab/> */}
                                </div>
         
            </div>
 
    )
}


export default Associates;