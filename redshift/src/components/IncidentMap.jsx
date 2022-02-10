import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup, Circle, Rectangle, FeatureGroup } from "react-leaflet";


const IncidentMap = ({incidentData}) => {

    const center = [51.505, -0.09];
    if (incidentData[0] === undefined && incidentData[1] === undefined && incidentData[2] === undefined) {
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
    
    incidentData[2].map((epos, index) => {
      return (
        <Marker id={index} position={[epos.latitude, epos.longitude]}>
          <Popup>
          EPOS DATA <br />
          forenames: {epos.forenames} <br />
          surname: {epos.surname} <br />
          DoB: {epos.dateOfBirth} <br />
          Time: {epos.timestamp} 
          </Popup>
        </Marker>
      )
    })}

{
    
          incidentData[1].map((financial, index) => {
            return (
              <Marker id={index} position={[financial.latitude, financial.longitude]}>
                <Popup>
                ATM DATA <br />
                forenames: {financial.forenames} <br />
                surname: {financial.surname} <br />
                DoB: {financial.dateOfBirth} <br />
                Time: {financial.timestamp} 
                </Popup>
              </Marker>
            )
          })}

{
          incidentData[0].map((vehicle, index) => {
            return (
              <Marker id={index} position={[vehicle.latitude, vehicle.longitude]}>
                <Popup>
                ANPR DATA <br />
                forenames: {vehicle.forenames} <br />
                surname: {vehicle.surname} <br />
                DoB: {vehicle.dateOfBirth} <br />
                Time: {vehicle.timestamp} 
                </Popup>
              </Marker>
            )
          })}
          </MapContainer>
          </div>
     )};
}
 
export default IncidentMap;