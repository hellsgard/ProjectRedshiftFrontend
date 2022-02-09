import axios from 'axios';
import { useEffect, useState } from "react";
import JWT from '../config/config.json';

const EposTransactions = () => {

    const [eposTransactionsData, setEposTransactionsData] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem(JWT);
        console.log("function running");
        axios.get("http://localhost:8080/eposTransactions/readAll", {headers: {'Authorization': `Bearer ${token}`}})
            .then((response) => {
                console.log(response);  // need to destructure data
                setEposTransactionsData(response.data);
                console.log(eposTransactionsData);
                setLoaded(true);
                console.log(response);
            }).catch((error) => {
                setLoaded(true);
                setError(error);
            })},[]);

    return (
        <div>
            {/* this could be a react fragment - better than doing lots of divs */}
            <h2> epos transactions page </h2>
        </div>

    );
}

export default EposTransactions;