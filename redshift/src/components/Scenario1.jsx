import Nav from "./Nav.jsx";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Scenario1 = () => {


const center = [51.505, -0.09]
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]

const fillBlueOptions = { fillColor: 'blue' }
const fillRedOptions = { fillColor: 'red' }
const greenOptions = { color: 'green', fillColor: 'green' }
const purpleOptions = { color: 'purple' }




  return (
    <div>
      <Nav></Nav>
      <h1> This is the page for scenario 1 </h1>
      <body>
        <h2>HTML Iframes for information</h2>
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
        <iframe
          src=""
          title="Iframe"
        ></iframe>
      </body>
    </div>
  );
};

export default Scenario1;
