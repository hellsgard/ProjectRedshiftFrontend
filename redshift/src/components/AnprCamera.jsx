import axios from 'axios';
import { useEffect, useState } from "react";
import JWT from '../config/config.json'

const AnprCamera = () => {

const [anprCameraData, setAnprCameraData] = useState([]);

const [error, setError] = useState(null);

const [loaded, setLoaded] = useState(false);

useEffect(() => {
    const token = localStorage.getItem(JWT);
    console.log("function running");
    axios.get("http://localhost:8080/anprCamera/readAll", {headers: {'Authorization': `Bearer ${token}`}})
    .then((response) => {
        console.log(response);  // need to destructure data
        setAnprCameraData(response.data);
        console.log(anprCameraData); 
        setLoaded(true);
        console.log(response); 
    }).catch((error) => {
        setLoaded(true);
        setError(error);
    })},[]);

    return ( 
        <div>  
            {/* this could be a react fragment - better than doing lots of divs */}
            <h2> anprCameraData details page </h2>
            
       
        </div>
    
); 
}
 
export default AnprCamera;