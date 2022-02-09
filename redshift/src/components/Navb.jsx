import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Navb = () => {
    return ( 
        <div>
            <Navbar variant="dark" bg="dark">
              {/* <Container> */}
                  <img src="../RedShift.png" alt="Redshift logo" height="80"></img>
                <Navbar.Brand href="/home">Home</Navbar.Brand>
                {/* <Navbar.Brand href="/lock">Lock</Navbar.Brand> */}
                <Navbar.Brand href="/logout">Logout</Navbar.Brand>
              {/* </Container> */}
            </Navbar>
        </div>
     );
}
 
export default Navb;