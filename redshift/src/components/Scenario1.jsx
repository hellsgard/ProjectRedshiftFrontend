
import Navb from "./Navb.jsx";
import "../CSS/Scenario1.css";
import Navb from "./Nav.jsx";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { selectOptions } from "@testing-library/user-event/dist/select-options";
import Suspect from './Suspect';
import  Button  from "react-bootstrap/Button";
import MobileDataInfo from "./MobileDataInfo.jsx";
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

// import { selectOptions } from "@testing-library/user-event/dist/select-options";
// import Suspect from './Suspect';
// const BasicData = ({basic.name, DOB, postcode, postcode, nationality,}) => {

const Scenario1 = () => {

  const center = [51.505, -0.09];
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  const fillBlueOptions = { fillColor: "blue" };
  const fillRedOptions = { fillColor: "red" };
  const greenOptions = { color: "green", fillColor: "green" };
  const purpleOptions = { color: "purple" };


  //const BasicData = ({forename, surname, address, dob, sex, passportNumber, nationality, placeOfBirth}) => {

  const [suspect, setSuspect] = useState("");
  const [suspectF, setSuspectF] = useState("");
  const [pageLoaded, setPageLoaded] = useState(false);

  const { id } = useParams();
  useEffect( () => {
    axios.get(`http://localhost:8080/queryPerson/byID/?citizenID=${id}`)
      .then((response) => {

        console.log(response);
        console.log("PPPPPPPPPPPPPPPPPPPPPP*****************")

        setSuspect(response.data)
        setPageLoaded(true);
      }).catch((error) => {
        console.log(error);
      });
  }, [id]);
  console.log(suspect.forenames);
  console.log("THIS THIS THIS")
  console.log(suspect);
  console.log("THIS THIS THIS") 


  // let forenames= suspect.forenames;
  // let surname= suspect.surname;
  let address= suspect.homeAddress;

  //trying to get financial data
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8080/queryPerson/financialEpos/?citizenID=${id}`)
  //     .then((response) => {
  //       console.log("hello")
  //       console.log(response);
  //       setSuspectF(response.data);
  //       setPageLoaded(true);
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [id]);
  // console.log(suspectF.accountNumber);


  let forenames = suspect.forenames;
  let surname = suspect.surname;
  let address = suspect.homeAddress;
  let dob = suspect.dateOfBirth;
  let gender = suspect.sex;
  let passportNumber= suspect.passportNumber;
  let nationality= suspect.nationality;
  let placeOfBirth= suspect.placeOfBirth;
  let workplace = suspect.businessName;








  // const getMobileData = (() => {
  //   console.log(suspect.forenames);
  //     axios.get(`http://localhost:8080/queryPerson/mobile`, {params: mobileQuery})
  //     .then((response) => {
  //       console.log(forenames);
  //       console.log(response); 
  //   })



  
  // return (
  //   <div>

  //     <Nav></Nav>
  //     <h4> Scenario 1 </h4>
  //     <body>
  //       <div class="container">
  //         <div class="row align-items-center my-5">
  //           <div class="col-lg-5">
  //             <h1 class="font-weight-light">Basic Information</h1>

  //               <p>Full Name: {forenames} {surname}</p>
  //               <p>Address: {address}</p>
  //               <p>Date Of Birth: {dob}</p>
  //               <p>Gender: {gender}</p>
  //               <p>Passport Number: {passportNumber} </p>
  //               <p>Nationality: {nationality} </p>
  //               <p>Place Of Birth: {placeOfBirth}</p>
                
  //             <h1 class="font-weight-light">Known Associates</h1>
  //             <p>
  //               Lorem Ipsum
  //             </p>
  //             <h1 class="font-weight-light">Financial</h1>
  //             <p>
  //               Lorem Ipsum
  //             </p>
  //             <h1 class="font-weight-light">Past Whereabouts</h1>
  //             <p>
  //               Lorem Ipsum
  //             </p>
  //             <h1 class="font-weight-light">Call Records</h1>
        
  //             <MobileDataInfo forenames={suspect.forenames} surname={suspect.surname} dateOfBirth={suspect.dateOfBirth}/>
  //             <p>
  //               Lorem Ipsum
  //             </p>
              
  //             <Map></Map>
  //             {/* {suspect.map((suspect) => {  
  //               return(
                     
  //                 <Suspect citizenID={suspect.citizenID} forenames={suspect.forenames} surname={suspect.surname} homeAddress={suspect.homeAddress} dateOfBirth={suspect.dateOfBirth} placeOfBirth={suspect.placeOfBirth} sex={suspect.sex}/>     
                        
  //           )})}; */}
  //           </div>
  //         </div>
  //       </div>
  //       <iframe src="" title="Iframe"></iframe>
  //     </body>





  return (
    <div>

        <div>
          <Navb/>
        </div>
            <br>
            </br>
        <h1 class="font-weight-light"> {suspect.forenames} {suspect.surname} </h1>
        <div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={2}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Profile information</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" onSelect={console.log("CLICK")}>Associates - work</Nav.Link>
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

      <div>
        <Navb />
      </div>
      <br></br>
      <h1 class="font-weight-light">
        {" "}
        Name: {forenames} {surname}{" "}
      </h1>
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Profile information</Nav.Link>
                  {/* <p>Full Name: {forenames} {surname}</p>
                  <p>Address: {address}</p>
                  <p>Date Of Birth: {dob}</p>
                  <p>Gender: {gender}</p>
                  <p>Passport Number: {passportNumber} </p>
                  <p>Nationality: {nationality} </p>
                  <p>Place Of Birth: {placeOfBirth}</p> */}
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Known associates</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Financial information</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Call records</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p>
                    Full Name: {forenames} {surname}
                  </p>

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
                    <p></p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <p></p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>

            </Row>
          </Tab.Container>
          <Col sm={9}>
          <h2>fd</h2>
          </Col>
        </div>

  
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
          <Map/>
        </MapContainer>

                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum." Section 1.10.32 of "de Finibus
                  Bonorum et Malorum", written by Cicero in 45 BC "Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?"
                </Tab.Pane>
                <Tab.Pane eventKey="Third">
                  {/* <h5> Bank Name: {bank} </h5>
                  <h5> Bank Account Number: {accountNumber} </h5>
                  <h5> Vendor: {vendor} </h5>
                  <h5> Amount Paid: {amount} </h5>
                  <h5> Time of Transaction: {timestamp} </h5> */}
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                <MobileDataInfo forenames={suspect.forenames} surname={suspect.surname} dateOfBirth={suspect.dateOfBirth}/>
      
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <Col sm={9}>
          <h2>Map Data</h2>
        </Col>
      </div>

      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <Map />
      </MapContainer>
    </div>
  );
};

    
  
    // const center = [51.505, -0.09];
  // const rectangle = [
  //   [51.49, -0.08],
  //   [51.5, -0.06],
  // ];

  // const fillBlueOptions = { fillColor: "blue" };
  // const fillRedOptions = { fillColor: "red" };
  // const greenOptions = { color: "green", fillColor: "green" };
  // const purpleOptions = { color: "purple" };


export default Scenario1;
