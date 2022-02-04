import Nav from "./Nav.jsx";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { selectOptions } from "@testing-library/user-event/dist/select-options";
import Suspect from './Suspect';
import Map from './Map'

// const BasicData = ({basic.name, DOB, postcode, postcode, nationality,}) => {

const Scenario1 = () => {

  //const BasicData = ({forename, surname, address, dob, sex, passportNumber, nationality, placeOfBirth}) => {

  const [suspect, setSuspect] = useState("");
  const [pageLoaded, setPageLoaded] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8080/queryPerson/byID/?citizenID=${id}`)
      .then((response) => {
        console.log(response);
        setSuspect(response.data)
        setPageLoaded(true);
        console.log(response)
      }).catch((error) => {
        console.log(error);
      })
  }, []);
  console.log(suspect.forenames);

  let forenames= suspect.forenames;
  let surname= suspect.surname;
  let address= suspect.homeAddress;
  let dob = suspect.dateOfBirth;
  let gender = suspect.sex;
  let passportNumber= suspect.passportNumber;
  let nationality= suspect.nationality;
  let placeOfBirth= suspect.placeOfBirth;
  
  return (
    <div>
      <Nav></Nav>
      <h4> Scenario 1 </h4>
      <body>
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-5">
              <h1 class="font-weight-light">Basic Information</h1>

                <p>Full Name: {forenames} {surname}</p>
                <p>Address: {address}</p>
                <p>Date Of Birth: {dob}</p>
                <p>Gender: {gender}</p>
                <p>Passport Number: {passportNumber} </p>
                <p>Nationality: {nationality} </p>
                <p>Place Of Birth: {placeOfBirth}</p>
                
              <h1 class="font-weight-light">Known Associates</h1>
              <p>
                Lorem Ipsum
              </p>
              <h1 class="font-weight-light">Financial</h1>
              <p>
                Lorem Ipsum
              </p>
              <h1 class="font-weight-light">Past Whereabouts</h1>
              <p>
                Lorem Ipsum
              </p>
              <h1 class="font-weight-light">Call Records</h1>
              <p>
                Lorem Ipsum
              </p>
              <Map></Map>
              {/* {suspect.map((suspect) => {  
                return(
                     
                  <Suspect citizenID={suspect.citizenID} forenames={suspect.forenames} surname={suspect.surname} homeAddress={suspect.homeAddress} dateOfBirth={suspect.dateOfBirth} placeOfBirth={suspect.placeOfBirth} sex={suspect.sex}/>     
                        
            )})}; */}
            </div>
          </div>
        </div>
        <iframe src="" title="Iframe"></iframe>
      </body>
    </div>
  );

}

export default Scenario1;