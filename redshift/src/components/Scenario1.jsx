import Navb from "./Navb.jsx";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {useParams} from 'react-router-dom';
import Tab from "react-bootstrap/Tab"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Suspect from "./Suspect.jsx";
import Nav from "react-bootstrap/Nav"

// const BasicData = ({basic.name, DOB, postcode, postcode, nationality,}) => {



const Scenario1 = () => {
  // const center = [51.505, -0.09];
  // const rectangle = [
  //   [51.49, -0.08],
  //   [51.5, -0.06],
  // ];

  const fillBlueOptions = { fillColor: "blue" };
  const fillRedOptions = { fillColor: "red" };
  const greenOptions = { color: "green", fillColor: "green" };
  const purpleOptions = { color: "purple" };





  

  let citizenID = useParams().id;
  let forenames = useParams().forenames;

  return (

  <div>
    <div>
      <Navb/>
    </div>
        <br>
        </br>
        <h1 class="font-weight-light"> NAME NAME </h1>
    <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Profile information</Nav.Link>
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
                  Full name:
                  <br></br>
                  Date of birth:
                  <br></br>
                  Home address:
                  <br></br>
                  Gender:
                  <br></br>
                  Place of Birth:
                  <br></br>
                  Nationality:
                  <br></br>
                  Passport Number:

                </Tab.Pane>
                <Tab.Pane eventKey="second">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum."
                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC

                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
                quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non 
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea 
                voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo 
                voluptas nulla pariatur?"
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
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>

      {/* <h1> Scenario 1 </h1>

        <body>
          <div class="container">
          <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Basic Information</h1>
            <p>
              Lorem Ipsum hello {forenames}
              
            </p>
            <h1 class="font-weight-light">Known Associates</h1>
            <p>
              Lorem Ipsum
            </p>
            <h1 class="font-weight-light">Financial</h1>
            <p>
              Lorem Ipsum
            </p>
            <h1 class="font-weight-light">Past Whereabouts</h1>
            <p>
              Lorem Ipsum
            </p>
            <h1 class="font-weight-light">Call Records</h1>
            <p>
              Lorem Ipsum
            </p>
            
        {/* MapContainer is for Leaflet */}


        {/* <h2>HTML Iframes for information</h2> */} 

        <h2>tets {citizenID}</h2>
        
       


          {/* </div>
        </div>
      </div>

        <iframe src="" title="Iframe"></iframe>
      </body> */}
    </div>
  );
};

export default Scenario1;
