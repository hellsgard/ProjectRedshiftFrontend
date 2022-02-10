import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Navb = () => {
    return ( 
        <div>
            <Navbar variant="dark" bg="dark">
              {/* <Container> */}
                  <img src="../RedShift.png" alt="Redshift logo" height="80"></img>
                  <Navbar.Brand href="/logout">Logout</Navbar.Brand>
                <Navbar.Brand href="/home">Scenario 1</Navbar.Brand>
                {/* <Navbar.Brand href="/lock">Lock</Navbar.Brand> */}
                
                <Navbar.Brand href="/scenario2">Scenario 2</Navbar.Brand>
                <Navbar.Brand href="/scenario3">Scenario 3</Navbar.Brand>
              {/* </Container> */}
            </Navbar>
        </div>
     );
}
 
export default Navb;
