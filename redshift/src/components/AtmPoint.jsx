import axios from 'axios';
import { useEffect, useState } from "react";

<<<<<<< HEAD:redshift/src/components/AtmPoint.jsx
const atmPoint = () => {
=======
const AtmPoint = () => {
>>>>>>> 1775f4f802a1aada400a8b5ba5fe3ab7ea91105b:redshift/src/components/atmPointRoute.jsx

const [atmPointData, setAtmPointData] = useState([]);

const [error, setError] = useState(null);

const [loaded, setLoaded] = useState(false);

useEffect(() => {
    console.log("function running");
    axios.get("http://localhost:8080/atmPoint/readAll")
    .then((response) => {
        console.log(response);  // need to destructure data
        setAtmPointData(response.data);
        console.log(atmPointData); 
        setLoaded(true);
        console.log(response); 
    }).catch((error) => {
        setLoaded(true);
        setError(error);
    })},[]);

    return ( 
        <div>  
            {/* this could be a react fragment - better than doing lots of divs */}
            <h2> atmpoint details page </h2>
            
       
        </div>
    
); 
}
 
<<<<<<< HEAD:redshift/src/components/AtmPoint.jsx
export default atmPoint;
=======
export default AtmPoint;
>>>>>>> 1775f4f802a1aada400a8b5ba5fe3ab7ea91105b:redshift/src/components/atmPointRoute.jsx
