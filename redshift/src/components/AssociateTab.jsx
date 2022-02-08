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


const AssociateTab = ({suspect}) => {

    // const [workData, setWorkData] = useState([]);
    const [homeData, setHomeData] = useState([]);
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
    
        axios.get(`http://localhost:8080/queryPerson/associatesHome/`,{params: suspect})
        .then((response) => {
            setHomeData(response.data);
            console.log(homeData);
            setPageLoaded(false);
        }
        ).catch((error) => {
            console.log(error);
        })
    },[])

    return (
        <div>
                {/* <div>
                    <h4 class="font-weight-light"> Works at: {workData.length && workData[0].businessName} </h4>
                    <h5 class="font-weight-light"> Address: {workData.length && workData[0].businessAddress}</h5>
                    <h5 class="font-weight-light"> Full employee list:</h5>
                </div>
                
                    {workData.length && workData.map((colleagues) => {
                            return (
                             
                                <div>
                                <ListGroup class="font-weight-light" variant="flush">
                                    <ListGroup.Item class="font-weight-light">
                                        {colleagues.forenames}{' '}  
                                        {colleagues.surname}{' '}
                                        {colleagues.dateOfBirth}{' '} 
                                    <Link to={`/Scenario1/${colleagues.citizenID}`}>
                                        profile
                                    </Link>

                                    </ListGroup.Item>
                                    </ListGroup>
                              
                                </div>
                            )
                        })} */}

                <div>
                    <br></br>
                    <h4 class="font-weight-light"> Lives at: {homeData.length && homeData[0].homeAddress} </h4>
                    <h5 class="font-weight-light"> All residents at this address:</h5>
                </div>
                
                    {homeData.length && homeData.map((home) => {
                            return (
                             
                                <div>
                                <ListGroup class="font-weight-light" variant="flush">
                                    <ListGroup.Item class="font-weight-light">
                                        {home.forenames}{' '}  
                                        {home.surname}{' '}
                                        {home.dateOfBirth}{' '} 
                                    <Link to={`/Scenario1/${home.citizenID}`}>
                                        profile
                                    </Link>

                                    </ListGroup.Item>
                                    </ListGroup>
                              
                                </div>
                            )
                        })}
         
        </div>
    )


}


export default AssociateTab;