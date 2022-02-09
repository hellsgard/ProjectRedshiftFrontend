import axios from 'axios';
import { useEffect, useState } from "react";
import JWT from '../config/config.json';

const Vehicles = () => {
    const [vehiclesData, setVehiclesData] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem(JWT);
        console.log("function running");
        axios.get("http://localhost:8080/vehicles/readAll", { headers: {'Authorization': `Bearer ${token}`}})
            .then((response) => {
                console.log(response);  // need to destructure data
                setVehiclesData(response.data);
                console.log(vehiclesData);
                setLoaded(true);
                console.log(response);
            }).catch((error) => {
                setLoaded(true);
                setError(error);
            })},[]);

    return (
        <div>
            {/* this could be a react fragment - better than doing lots of divs */}
            <h2> vehicles page </h2>
        </div>

    );
}

export default Vehicles;