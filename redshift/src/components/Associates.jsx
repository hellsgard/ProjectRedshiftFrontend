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
<<<<<<< HEAD
import JWT from '../config/config.json'
=======
import {Link} from 'react-router-dom';
import Button from "react-bootstrap/Button";
// import AssociateTab from "./AssociateTab.jsx";
// import Button from 'react-bootstrap/Button'
>>>>>>> 0f1064f0777f53fc5531032213f0d6c3fefd62ac
// import Scenario1 from "./Scenario1.jsx";

const Associates = ({ workData, homeData }) => {
    const [workInfo, setWorkInfo] = useState([]);
    const [pageLoaded, setPageLoaded] = useState(false);

<<<<<<< HEAD
    let queryPerson = {
        
        surname: suspect.surname,
        forenames: suspect.forenames,
        dateOfBirth: suspect.dateOfBirth,
        // businessName: workplace
    }; 

  useEffect(() => {
    const token = localStorage.getItem(JWT);
    axios.get(`http://localhost:8080/queryPerson/associates`,{params: queryPerson, headers: {'Authorization': `Bearer ${token}`}})
      .then((response) => {
        setAssocData(response.data);
        setPageLoaded(false);
      }).catch((error) => {
          console.log("ERROR",error)
      })
  },[]);

    
=======

>>>>>>> 0f1064f0777f53fc5531032213f0d6c3fefd62ac
    return (

        <div>
        <Row>
        
        <Col>
          <h3>
          <h5 class="font-weight-light"> Works at: {workData.length && workData[0].businessName} </h5>
          <h6 class="font-weight-light"> Address: {workData.length && workData[0].businessAddress}</h6>
          <h6 class="font-weight-bold"> All current employees:</h6>
          </h3>
                {workData.length && workData.map((colleagues) => {
                            return (
                                <div>
                                {/* {assocData[0].businessName} */}

                                <ListGroup variant="flush">
                                    <ListGroup.Item class="font-weight-light">{colleagues.forenames}  {colleagues.surname}{' '} 
                                    <Link to={`/Scenario1/${colleagues.citizenID}`}>
                                        profile
                                    </Link>

                                    </ListGroup.Item>
                                    </ListGroup>
                              
                                </div>
                                )
                                })}
        </Col>

        <Col>
          <h5 class="font-weight-light"> Lives at: {homeData.length && homeData[0].homeAddress} </h5>
          <h6 class="font-weight-bold"> All known residents:</h6>
                {homeData.length && homeData.map((roomies) => {
                            return (
                                <div>
                                {/* {assocData[0].businessName} */}

                                <ListGroup variant="flush">
                                    <ListGroup.Item class="font-weight-light">{roomies.forenames}  {roomies.surname}{' '} 
                                    <Link to={`/Scenario1/${roomies.citizenID}`}>
                                        profile
                                    </Link>
                                    </ListGroup.Item>

                                    </ListGroup>
                              
                                </div>
                                )
                                })}
        </Col>
      </Row>
      </div>
 
    )
}


export default Associates;