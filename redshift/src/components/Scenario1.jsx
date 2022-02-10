import Navb from "./Navb.jsx";
import "../CSS/Scenario1.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Map from "./Map.jsx";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Associates from "./Associates.jsx";
import { ReactPropTypes } from "react";
import MobileDataInfo from "./MobileDataInfo.jsx";
import FinanceInfo from "./FinanceInfo.jsx";
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner"
import JWT from '../config/config.json';
import Vehicles from "./Vehicles.jsx";


// import { selectOptions } from "@testing-library/user-event/dist/select-options";
// import Suspect from './Suspect';
// const BasicData = ({basic.name, DOB, postcode, postcode, nationality,}) => {
const Scenario1 = () => {

  let api = `http://localhost:8080/queryPerson/`;
  const [suspect, setSuspect] = useState("");
  const [pageLoaded, setPageLoaded] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [inboundCalls, setInboundCalls] = useState([]);
  const [outboundCalls, setOutboundCalls] = useState([]);
  const [callRecordsLoaded, setCallRecordsLoaded] = useState(false);
  const [anprData, setAnprData]= useState([]);
  const [anprLoaded, setAnprLoaded] =useState(false);
  const [atmData, setAtmData]= useState([]);
  const [atmLoaded, setAtmLoaded] =useState(false);
  const [eposData, setEposData]= useState([]);
  const [eposLoaded, setEposLoaded] =useState(false);
  const [eposMapData, setEposMapData]= useState([]);
  const [eposMapLoaded, setEposMapLoaded] =useState(false);
  const [anprMapData, setAnprMapData]= useState([]);
  const [anprMapLoaded, setAnprMapLoaded] =useState(false);
  const [atmMapData, setAtmMapData]= useState([]);
  const [atmMapLoaded, setAtmMapLoaded] =useState(false);
  const [workData, setWorkData] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [vehiclesData, setVehiclesData] = useState([]);



  useEffect(() => {
    const token = localStorage.getItem(JWT);
    axios
      .get(`http://localhost:8080/queryPerson/byID?citizenID=${id}`, {headers: {'Authorization': `Bearer ${token}`}})
      .then((response) => {
        console.log(response);
        setSuspect(response.data);
        setPageLoaded(true);
        console.log("Got results, page loaded.");
        getCallRecords(response.data);
        getOutboundCallRecords(response.data);;
        getAnprData(response.data);
        getAtmData(response.data);
        getEposData(response.data);
        getEposMapData(response.data);
        getAtmMapData(response.data);
        getAnprMapData(response.data);
        getOutboundCallRecords(response.data);
        getWork(response.data);
        getHome(response.data);


      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);


  const getCallRecords = ((suspectInfo) => {
    const token = localStorage.getItem(JWT);
    axios.get(`http://localhost:8080/queryPerson/callRecords`, { params: suspectInfo, headers: {'Authorization': `Bearer ${token}`}})
      .then((response) => {
        setInboundCalls(response.data);
      }).catch((error) => {
        console.log(error);
      })
  });

  const getOutboundCallRecords = ((suspectInfo) => {
    const token = localStorage.getItem(JWT);
    axios.get(`http://localhost:8080/queryPerson/callRecordsOutbound`, { params: suspectInfo, headers: {'Authorization': `Bearer ${token}`}})
      .then((response) => {
        setOutboundCalls(response.data);
        setCallRecordsLoaded(true);
      }).catch((error) => {
        console.log(error);
      });
  })


  const getAnprData = ((suspectInfo)=>{
    const token = localStorage.getItem(JWT);

    axios.get(`http://localhost:8080/queryPerson/anpr`, { params: suspectInfo, headers: {'Authorization': `Bearer ${token}`}})

    .then((response) => {
      setAnprData(response.data);
      console.log("anpr function");
      console.log(anprData);
      setAnprLoaded(true);
    }).catch((error) => {
      console.log(error);
    });
  })

  const getAtmData = ((suspectInfo)=>{
    const token = localStorage.getItem(JWT);

    axios.get(`http://localhost:8080/queryPerson/atmData`, { params: suspectInfo, headers: {'Authorization': `Bearer ${token}`}})

    .then((response) => {
      setAtmData(response.data);
      console.log("atm function");
      console.log(atmData);
      setAtmLoaded(true);
    }).catch((error) => {
      console.log(error);
    });
  })

  const getEposData = ((suspectInfo)=>{
    const token = localStorage.getItem(JWT);

    axios.get(`http://localhost:8080/queryPerson/eposData`, { params: suspectInfo, headers: {'Authorization': `Bearer ${token}`}})

    .then((response) => {
      setEposData(response.data);
      console.log("epos function");
      console.log(eposData);
      setEposLoaded(true);
    }).catch((error) => {
      console.log(error);
    });
  })

  const getEposMapData = ((suspectInfo)=>{
    const token = localStorage.getItem(JWT);

    axios.get(`http://localhost:8080/mapData/eposMap`, { params: suspectInfo, headers: {'Authorization': `Bearer ${token}`}})

    .then((response) => {
      setEposMapData(response.data);
      console.log("epos map function");
      console.log(eposMapData);
      setEposMapLoaded(true);
    }).catch((error) => {
      console.log(error);
    });
  })

  const getAtmMapData = ((suspectInfo)=>{
    const token = localStorage.getItem(JWT);

    axios.get(`http://localhost:8080/mapData/atmMap`, { params: suspectInfo, headers: {'Authorization': `Bearer ${token}`}})

    .then((response) => {
      setAtmMapData(response.data);
      console.log("atm map function");
      console.log(atmMapData);
      setAtmMapLoaded(true);
    }).catch((error) => {
      console.log(error);
    });
  })

  const getAnprMapData = ((suspectInfo)=>{
    const token = localStorage.getItem(JWT);

    axios.get(`http://localhost:8080/mapData/anprMap`, { params: suspectInfo , headers: {'Authorization': `Bearer ${token}`}})

    .then((response) => {
      setAnprMapData(response.data);
      console.log("anpr map function");
      console.log(response.data);
      setAnprMapLoaded(true);
    }).catch((error) => {
      console.log(error);
    });
  })
  const getWork = ((suspectInfo) => {
    const token = localStorage.getItem(JWT);
    axios.get(`http://localhost:8080/queryPerson/associates/`,{params: suspectInfo, headers: {'Authorization': `Bearer ${token}`}})
        .then((response) => {
            setWorkData(response.data);
            // setPageLoaded(false);
            }
            ).catch((error) => {
                console.log(error);
            })
        });

  const getHome = ((suspectInfo) => {
    const token = localStorage.getItem(JWT);
          axios.get(`http://localhost:8080/queryPerson/associatesHome/`,{params: suspectInfo, headers: {'Authorization': `Bearer ${token}`}})
              .then((response) => {
                  setHomeData(response.data);
                  // setPageLoaded(false);
                  }
                  ).catch((error) => {
                      console.log(error);
                  })
              });

  // const getCars = ((suspectInfo) => {
  //   axios.get(`http://localhost:8080/queryPerson/vehicleInfo/`, { params: suspectInfo})
  //       .then((response) => {
  //         setVehiclesData(response.data);
  //         console.log(vehiclesData); 
  //       }
  //       ).catch ((error) => {
  //         console.log("vehicles error", error);
  //       })

  // });
 


  if (error) {
    return <h1>Something bad</h1>
  } else if (!pageLoaded) {

    return <div> Page loading, please wait {' '}<Spinner animation="border" variant="danger" /> </div>
    } else {

    // Data has been returned.

    console.log("suspect is", suspect);

    // let forenames= suspect.forenames;
    // let surname= suspect.surname;
    let forenames = suspect.forenames;
    let surname = suspect.surname;
    let address = suspect.homeAddress;
    let dob = suspect.dateOfBirth;
    let gender = suspect.sex;
    let passportNumber = suspect.passportNumber;
    let nationality = suspect.nationality;
    let placeOfBirth = suspect.placeOfBirth;
    // let workplace = suspect.businessName;

    return (
      <div>
        <div>
          <Navb/>
        </div>
        <br></br>
        <h1 class="font-weight-light">
          {" "}
          {suspect.forenames} {suspect.surname}{" "}
        </h1>

        <Container fluid>
         <Row>
          <Col>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <div>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Profile information</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" onSelect={console.log("CLICK")}> Associates </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Financial information</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Call records</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Vehicle</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  </div>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <p>Full Name: {suspect.forenames} {suspect.surname}</p>
                      <p>Address: {address}</p>
                      <p>Date Of Birth: {dob}</p>
                      <p>Gender: {gender}</p>
                      <p>Passport Number: {passportNumber} </p>
                      <p>Nationality: {nationality} </p>
                      <p>Place Of Birth: {placeOfBirth}</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" title="Associates">
                      {/* {pageLoaded && <Associates citizenID={id} workData={workData}/> }
                      {pageLoaded && <Associates citizenID={id} homeData={homeData}/> } */}
                      <Associates workData={workData} homeData={homeData}/>
                      <p> </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
             
                    <FinanceInfo atmData={atmData} eposData={eposData} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    
                      <MobileDataInfo inboundCalls={inboundCalls} outboundCalls={outboundCalls}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                       <Vehicles anprData={anprData}/>
                      
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            
              </Col>
              <Col>
                  <h3 class="font-weight-light">Transactions and logged vehicle locations:</h3>
                  <MapContainer>
                    <Map eposMapData={eposMapData} anprMapData={anprMapData} atmMapData={atmMapData}/>
                  </MapContainer>
              </Col>
          </Row>
          </Container> 
        
      </div>
    );
  }
};
export default Scenario1;
