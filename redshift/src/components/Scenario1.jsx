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

// import { selectOptions } from "@testing-library/user-event/dist/select-options";
// import Suspect from './Suspect';
// const BasicData = ({basic.name, DOB, postcode, postcode, nationality,}) => {
const Scenario1 = () => {
  const [suspect, setSuspect] = useState("");
  const [pageLoaded, setPageLoaded] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/queryPerson/byID?citizenID=${id}`)
      .then((response) => {
        console.log(response);
        setSuspect(response.data);
        setPageLoaded(true);
        console.log("Got results, page loaded.");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
 
  

  if(error){
    return <h1>Something bad</h1>
  } else if(!pageLoaded){
    return <h1>Not loaded yet</h1>
  } else{
    // Data has been returned.

    console.log("suspect is",suspect);

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
          <Navb />
        </div>
        <br></br>
        <h1 class="font-weight-light">
          {" "}
          {suspect.forenames} {suspect.surname}{" "}
        </h1>
        <div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={2}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Profile information</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" onSelect={console.log("CLICK")}>
                      Associates - work
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Associates - home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Financial information</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Call records</Nav.Link>
                  </Nav.Item>
                </Nav>
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
                        {/* {assocData.map((assocData))} */}
                        <Associates id={id} suspect={suspect}/> 
                        <p> </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>third</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <p></p>
                        <FinanceInfo citizenID={suspect.citizenID} forenames={suspect.forenames} surname={suspect.surname} dateOfBirth={suspect.dateOfBirth}/>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fifth">
                        <MobileDataInfo forenames={suspect.forenames} surname={suspect.surname} dateOfBirth={suspect.dateOfBirth}/>
                      </Tab.Pane>
                      <MapContainer
                    // center={[51.505, -0.09]}
                    zoom={13}
                    scrollWheelZoom={true}
                  >
                    <Map citizenId={id} />
                  </MapContainer>
                    </Tab.Content>
                  </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    );
  }
};
export default Scenario1;
// const center = [51.505, -0.09];
// const rectangle = [
//   [51.49, -0.08],
//   [51.5, -0.06],
// ];
// const fillBlueOptions = { fillColor: "blue" };
// const fillRedOptions = { fillColor: "red" };
// const greenOptions = { color: "green", fillColor: "green" };
// const purpleOptions = { color: "purple" };