import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup, Circle, Rectangle, FeatureGroup } from "react-leaflet";

// Setup size of Shapes
const center = [51.505, -0.09];
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
];

// Colours for using in squares and circles
const fillPurpleOptions = { fillColor: "purple" };
const fillBlueOptions = { fillColor: "blue" };
const fillRedOptions = { fillColor: "red" };
const greenOptions = { color: "green", fillColor: "green" };
const purpleOptions = { color: "purple" };

const Map = ({ eposMapData, anprMapData, atmMapData }) => {
  // const eposPosition = [eposMapData[0].latitude, eposMapData[0].longitude];
  // const atmPosition = [atmMapData[0].latitude, atmMapData[0].longitude];
  // const anprPosition = [anprMapData[0].latitude, anprMapData[0].longitude];

  return ( 
    <div id="map">

      <MapContainer center={center} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {
          eposMapData.map((item, index) => {
            return (
              <Marker id={index} position={[item.latitude, item.longitude]}>
                <Popup>
                  Vendor = {item.vendor} <br />
                  StreetName = {item.streetName} <br />
                  CitizenID = {item.citizenID} <br />
                  AccountNumber = {item.accountNumber} <br />
                  Bank = {item.bank} <br />
                  CardNumber = {item.cardNumber} <br />
                  EposId = {item.eposId} <br />
                  Timestamp = {item.timestamp} <br />
                  Amount = £{item.amount}

                </Popup>
              </Marker>
            )
          })}

        {
          atmMapData.map((item, index) => {
            return (
              <Marker id={index} position={[item.latitude, item.longitude]}>
                <Popup>
                  Operator: {item.operator} <br />
                  Amount: £{item.amount}<br />
                  Street Name: {item.streetName}<br />
                  CardNumber: {item.cardNumber} <br />
                  Atm ID: {item.atmId} <br />
                  Timestamp: {item.timestamp} <br />

                </Popup>
              </Marker>
            )
          })}

        {
          anprMapData.map((item, index) => {
            return (
              <Marker id={index} position={[item.latitude, item.longitude]}>
                <Popup>
                  Registration Number: {item.vehicleRegistrationNumber} <br />
                  Street Name: {item.streetName}<br />
                  Timestamp: {item.timestamp} <br />

                </Popup>
              </Marker>
            )
          })}

      </MapContainer>
    </div>
  )

};


export default Map;

