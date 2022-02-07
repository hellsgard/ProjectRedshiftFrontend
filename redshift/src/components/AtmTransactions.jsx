import axios from 'axios';
import { useEffect, useState } from "react";

const AtmTransactions = () => {

    const [transactionsData, setTransactionsData] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log("function running");
        axios.get("http://localhost:8080/atmTransactions/readAll")
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
            {/* {transactionsData.map((transactions) => (
                <div className="transactions">{transactions.}
            ))} */}
        </div>

    );
}

export default AtmTransactions;