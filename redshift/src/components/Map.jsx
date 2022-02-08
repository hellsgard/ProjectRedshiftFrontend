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

const Map = ({citizenId}) => {
            
  const [eposData, setEposData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      console.log("function running");
      axios.get(`http://localhost:8080/mapData?citizenID=${citizenId}`) // TODO: to pass ID
          .then((response) => {
              console.log("Response is:",response.data);  // need to destructure data
              setEposData(response.data);
              setLoaded(true);



          }).catch((error) => {
              console.log('error is fudging us here',error)
              setLoaded(true);
              setError(error);
              
          }).then(() => {
            console.log('done something')
          })},[]); // ???

    // let accountNumber= eposData.accountNumber;
    // let amount = eposData.amount;
    // let bank= eposData.bank;
    // let cardNumber = eposData.cardNumber;
    // let eposID= eposData.eposID;
    // let latitude= eposData.latitude;    
    // let longitude= eposData.longitude;    
    
    if(error){
      return <h1>Something bad</h1>
    } else if(!loaded){
      return <h1>Not loaded yet</h1>
    } else{

      if(eposData.length === 0){
        return <h1>No points to show</h1>
      }

      console.log('data =',eposData)
      const position = [eposData[0].latitude,eposData[0].longitude] // update as you wish!
      

      return( 
          <div id="map">
            <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {
        eposData.map((item,index) => {
          return (
            <Marker id={index} position={[item.latitude,item.longitude]}>
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
        })          
      }}
      
    </MapContainer>
          </div>
      );
    }
}
 
export default Map;

