import Nav from "./Navb.jsx";
import {MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup, Circle, Rectangle, FeatureGroup} from "react-leaflet";
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { selectOptions } from "@testing-library/user-event/dist/select-options";
import atmPoint from './AtmPoint';
import Card from 'react-bootstrap/Card';

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

const Map = ({}) => {
            
  const [atmPoint, setAtmPoint] = useState([]);
  const [loaded, setLoaded] = useState(false);
  
    const { id } = useParams();

    useEffect(() => {
    axios.get(`http://localhost:8080/atmPoint/readAll`) // this needs to change
    .then((response) => {
    // What does the data look like when pulling it
    console.log(response.data);
    setAtmPoint(response.data)
    setLoaded(true);
    console.log(atmPoint);
  })
}, []);

    let atmId= atmPoint.atmId;
    let operator = atmPoint.operator;
    let streetName= atmPoint.streetName;
    let postcode = atmPoint.postcode;
    let longitude= atmPoint.longitude;
    let latitude= atmPoint.latitude;    
    const position = [51.505, -0.09]

    return ( 
        <div id="map">
          <h5>{atmId}</h5>
        {/* MapContainer is for Leaflet */}
        {/* Have to tell map where to start currently london 51.505, -0.09 we could use {longitude} and {latitude} from data*/}
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
            {/* JW:FYI LayersControl gives a UI to the Map */}
    <LayersControl position="topright">
      <LayersControl.BaseLayer checked name="BasicMap">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

      </LayersControl.BaseLayer>
      <LayersControl.Overlay name="Marker with popup">
        <Marker position={center}>
          <Popup>
            A popup. <br /> 
            {/* We can customize perhaps use popups to show atm`s vehicles etc. */}
          </Popup>
        </Marker>

        {/* Group of Circles */}
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Layer group with circles">
        <LayerGroup>
          <Circle
            center={center}
            fillBlueOptions
            radius={200}
          />
          <Circle
            center={center}
            fillBlueOptions
            radius={100}
            stroke={false}
          />
          <LayerGroup>
            <Circle
              center={[51.51, -0.08]}
              fillBlueOptions
              radius={100}
            />
          </LayerGroup>
        </LayerGroup>

        {/* Group of Squares */}
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Square group">
        <FeatureGroup pathOptions={fillPurpleOptions}>
          <Popup>Popup in FeatureGroup</Popup>
          <Circle center={[51.51, -0.06]} radius={200} />
          <Rectangle bounds={rectangle} />
        </FeatureGroup>
      </LayersControl.Overlay>
    </LayersControl>
  </MapContainer>,
        <Card style={{width: '25rem'}}>
                <h5>atmId: {atmId}</h5>
                <h5>operator: {operator}</h5>
                <h5>streetName: {streetName}</h5>
                <h5>postcode: {postcode} </h5>
                <h5>longitude: {longitude} </h5>
                <h5>latitude: {latitude}</h5>
        </Card>
        </div>
     );
}
 
export default Map;

