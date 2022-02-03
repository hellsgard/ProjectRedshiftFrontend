import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Nav = () => {
    return ( 
        <div>
            <Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <img src="RedShift.png" alt="Redshift logo" width="100" height="100"></img>
      <Navbar.Brand href="/home">Home</Navbar.Brand>
      <Navbar.Brand href="/lock">Lock</Navbar.Brand>
      <Navbar.Brand href="logout">Logout</Navbar.Brand>

    </Container>
  </Navbar>
</Container>

        </div>
     );
}
 
export default Nav;