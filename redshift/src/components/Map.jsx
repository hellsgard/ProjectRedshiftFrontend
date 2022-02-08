import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
  Circle,
  Rectangle,
  FeatureGroup,
} from "react-leaflet";
import { useEffect, useState } from "react";
import axios from "axios";

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

const Map = ({ citizenId }) => {
  //All States
  const [eposData, setEposData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [anprData, setAnprData] = useState([]);
  const [atmData, setAtmData] = useState([]);

  //Use Effect for EPOS
  useEffect(() => {
    console.log("function running");
    axios
      .get(`http://localhost:8080/mapData?citizenID=${citizenId}`) // TODO: to pass ID
      .then((response) => {
        console.log("Response is:", response.data); // need to destructure data
        setEposData(response.data);
        setLoaded(true);
      })
      .then(() => {
        console.log("got Epos Data");
      });
  }, []); // ???

  useEffect(() => {
    console.log("function running");
    axios
      .get(`http://localhost:8080/mapDataAtm?citizenID=${citizenId}`) // TODO: to pass ID
      .then((response) => {
        console.log("Response is:", response.data); // need to destructure data
        setAtmData(response.data);
        setLoaded(true);
      })
      .catch((error) => {
        console.log("error is happening here", error);
        setError(error);
      })
      .then(() => {
        console.log("got ATM Data");
      });
  }, []); // ???

  //Use Effect for ANPR
  useEffect(() => {
    console.log("function running");
    axios
      .get(`http://localhost:8080/mapDataAnpr?citizenID=${citizenId}`) // TODO: to pass ID
      .then((response) => {
        console.log("Response is:", response.data); // need to destructure data
        setAnprData(response.data);
        setLoaded(true);
      })
      .catch((error) => {
        console.log("error is happening here", error);
        setLoaded(true);
        setError(error);
      })
      .then(() => {
        console.log("Got ANPR Data");
      });
  }, []); // ???

  // If error and returns
  if (error) {
    return <h1>Something bad</h1>;
  } else if (!loaded) {
    return <h1>Not loaded yet</h1>;
  } else {
    if (eposData.length === 0) {
      return <h1>No EPOS points to show</h1>;
    }
    if (anprData.length === 0) {
      return <h1>No ANPR points to show</h1>;
    }
    if (atmData.length === 0) {
      return <h1>No ATM points to show</h1>;
    }

    console.log("EPOS data =", eposData);
    console.log("ATM data =", atmData);
    console.log("ANPR data =", anprData);
    const position = [eposData[0].latitude, eposData[0].longitude]; // update as you wish!

    return (
      <div id="map">
        <h5>Title</h5>
        <MapContainer center={position} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {eposData.map((item, index) => {
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
            );
          })}
        </MapContainer>
      </div>
    );
  }
};

export default Map;
