import Nav from "./Nav.jsx";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { selectOptions } from "@testing-library/user-event/dist/select-options";
import atmPoint from './AtmPoint';

const center = [51.505, -0.09];
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
];

const fillBlueOptions = { fillColor: "blue" };
const fillRedOptions = { fillColor: "red" };
const greenOptions = { color: "green", fillColor: "green" };
const purpleOptions = { color: "purple" };

const Map = () => {
    const [atmPoint, setAtmPoint] = useState("");
    const [pageLoaded, setPageLoaded] = useState(false);
  
    const { id } = useParams();
    useEffect(() => {
      axios.get(`http://localhost:8080/atmPoint/readAll`)
        .then((response) => {
          console.log(response);
          setAtmPoint(response.data)
          setPageLoaded(true);
          console.log(response)
        }).catch((error) => {
          console.log(error);
        })
    }, []);
    console.log(atmPoint.forenames);
    
    let atmId= atmPoint.atmId;
    let operator = atmPoint.operator;
    let streetName= atmPoint.streetName;
    let postcode = atmPoint.postcode;
    let longitude= atmPoint.longitude;
    let latitude= atmPoint.latitude;
    
    
    return ( 
        <div>
        {/* MapContainer is for Leaflet */}
        {/* Have to tell map where to start currently london 51.505, -0.09 we could use {longitude} and {latitude} from data*/}
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {}
        <Marker position={[51.505, -0.09]}>
        <Popup>
        popup could write text. <br />
        </Popup>
        </Marker>
        </MapContainer>
                <p>atmId: {atmId}</p>
                <p>operator: {operator}</p>
                <p>streetName: {streetName}</p>
                <p>postcode: {postcode} </p>
                <p>longitude: {longitude} </p>
                <p>latitude: {latitude}</p>
        </div>
     );
}
 
export default Map;

