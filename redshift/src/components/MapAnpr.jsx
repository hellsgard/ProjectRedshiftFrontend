import {MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup, Circle, Rectangle, FeatureGroup} from "react-leaflet";
import { useEffect, useState } from 'react';
import axios from 'axios';



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
            
  const [anprData, setAnprData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      console.log("function running");
      axios.get(`http://localhost:8080/mapDataAnpr?citizenID=${citizenId}`) // TODO: to pass ID
          .then((response) => {
              console.log("Response is:",response.data);  // need to destructure data
              setAnprData(response.data);
              setLoaded(true);

          }).catch((error) => {
              console.log('error is happening here',error)
              setLoaded(true);
              setError(error);
              
          }).then(() => {
            console.log('done something')
          })},[]); // ???
    
          if(error){
            return <h1>Something bad</h1>
          } else if(!loaded){
            return <h1>Not loaded yet</h1>
          } else{

      if(anprData.length === 0){
        return <h1>No points to show</h1>
      }

      console.log('data =',anprData)
      const position = [anprData[0].latitude,anprData[0].longitude] // update as you wish!
      

      return( 
          <div id="map">
            <h5>Title</h5>
            <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {
        anprData.map((anpr,index) => {
          return (
            <Marker id={index} position={[anpr.latitude,anpr.longitude]}>
              <Popup>
                ATM ID = {anpr.atmId} <br />
                Amount = £{anpr.amount} <br />
                StreetName = {anpr.streetName} <br />
                Postcode = {anpr.postcode} <br />
                CardNumber = {anpr.cardNumber} <br />
                Bank = {anpr.operator} <br />
                CardNumber = {anpr.cardNumber} <br />
                Timestamp = {anpr.timestamp} <br />                
                </Popup>
                </Marker>
              )
            })          
          }
          
        </MapContainer>
              </div>
          );
        }
    }
     
    export default Map;
    
