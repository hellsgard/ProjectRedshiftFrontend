import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup, Circle, Rectangle, FeatureGroup } from "react-leaflet";


const Scenario3Map = ({fleesData}) => {

    const center = [51.505, -0.09];
    if (fleesData === undefined) {
        return (
            <p>Loading</p>
        ) 
    } else {
        

    return ( 
        <div id="map">

        <MapContainer center={center} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
          fleesData.map((anpr, index) => {
            return (
              <Marker id={index} position={[anpr.latitude, anpr.longitude]}>
                <Popup>
                ANPR DATA <br />
                Time: {anpr.timestamp} 
                </Popup>
              </Marker>
            )
          })}
          </MapContainer>
          </div>
     )};
}
 
export default Scenario3Map;