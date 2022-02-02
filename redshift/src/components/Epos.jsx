import axios from 'axios';
import { useEffect, useState } from "react";

const Epos = () => {

    const [eposData, setEposData] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log("function running");
        axios.get("http://localhost:8080/epos/readAll")
            .then((response) => {
                console.log(response);  // need to destructure data
                setEposData(response.data);
                console.log(eposData);
                setLoaded(true);
                console.log(response);
            }).catch((error) => {
                setLoaded(true);
                setError(error);
            })},[]);

    return (
        <div>
            {/* this could be a react fragment - better than doing lots of divs */}
            <h2> epos page </h2>
        </div>

    );
}

export default Epos;