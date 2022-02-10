import axios from 'axios';
import { useEffect, useState } from "react";
import JWT from '../config/config.json';

const AtmTransactions = () => {

    const [transactionsData, setTransactionsData] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem(JWT);
        console.log("function running");
        axios.get("http://localhost:8080/atmTransactions/readAll", {headers: {'Authorization': `Bearer ${token}`}})
            .then((response) => {
                console.log(response);  // need to destructure data
                setTransactionsData(response.data);
                console.log(transactionsData);
                setLoaded(true);
                console.log(response);
            }).catch((error) => {
                setLoaded(true);
                setError(error);
            })},[]);

    return (
        <div>
            {/* this could be a react fragment - better than doing lots of divs */}
            <h2> atm transactions page </h2>
        </div>

    );
}

export default AtmTransactions;