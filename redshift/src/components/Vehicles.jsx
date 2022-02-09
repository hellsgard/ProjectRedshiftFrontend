import axios from 'axios';
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card"

   // DON'T ACCEPT THIS MERGE VERSION!!!

const Vehicles = ({vehiclesData}) => {
    // const [vehiclesData, setVehiclesData] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    // useEffect(() => {
    //     console.log("function running");
    //     axios.get(`http://localhost:8080/queryPerson/vehicleInfo`, { params: citizenID})
    //         .then((response) => {
    //             console.log(response);  // need to destructure data
    //             setVehiclesData(response.data);
    //             console.log(vehiclesData);
    //             setLoaded(true);
    //             console.log("car should be ", response);
    //         }).catch((error) => {
    //             setLoaded(true);
    //             setError(error);
    //         })},[]);

       // DON'T ACCEPT THIS MERGE VERSION!!!


    // DON'T ACCEPT THIS MERGE VERSION!!!
    return (
        <div>
            {/* this could be a react fragment - better than doing lots of divs */}
            <h2 class="font-weight-light"> Cars owned: </h2>

            {vehiclesData.length && vehiclesData.map((cars) => {
                            if(cars === 0) {
                                return (
                                    <div>No car owned </div>

                                )
                            } else {return (
                                <div>
                                {/* {assocData[0].businessName} */}

                                    <Card style={{ width: '30rem' }}>
                                        <p class="font-weight-light">Make: {cars.make}  </p>
                                        <p class="font-weight-light">Model: {cars.model}</p>
                                        <p class="font-weight-light">Registraion: {cars.vehicleRegistrationNo}</p>
                                        <p class="font-weight-light">Licence ID: {cars.driverLicenseID}</p>
                                    </Card>
                                </div>
                                )}
                            
                                })}
        </div>

    );
}

export default Vehicles;