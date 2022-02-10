import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "../CSS/index.css";

const Navb = () => {
  return (
    <div>
      <Navbar variant="dark" bg="dark">
        {/* <Container> */}

        <img src="../RedShift.png" alt="Redshift logo" height="80"></img>
        <div className="home p-4">
          <Navbar.Brand href="/home">Home</Navbar.Brand>
        </div>
        {/* <Navbar.Brand href="/lock">Lock</Navbar.Brand> */}

        <Navbar.Brand href="/logout"> Logout</Navbar.Brand>

        {/* </Container> */}
      </Navbar>
    </div>
  );
};

export default Navb;
