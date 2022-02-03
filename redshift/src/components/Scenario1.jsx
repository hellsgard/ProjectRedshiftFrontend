import Nav from "./Nav.jsx";
import {useParams} from "react-router-dom";

const Scenario1 = () => {


  let{citizenID} = useParams();

  return (
    <div>
      <Nav></Nav>
      <h1> This is the page for scenario 1 </h1>
      <body>
        <h2>HTML Iframes for information</h2>
        <h2>{citizenID}</h2>

        <iframe
          src=""
          title="Iframe"
        ></iframe>
      </body>
    </div>
  );
};

export default Scenario1;
