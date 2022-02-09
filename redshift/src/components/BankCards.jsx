import axios from 'axios';
import JWT from '../config/config.json';

import { useEffect, useState } from "react";

const BankCards = () => {
// Our state is going to be the data we pull from the api
const [bankCardData, setbankCardData] = useState([]);

// State to check if the API has errored
const [error, setError] = useState(null);

// State to check if the data has loaded
const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem(JWT);
        console.log("function running");
        axios.get("http://localhost:8080/bankCard/readAll", {headers: {'Authorization': `Bearer ${token}`}})
        .then((response) => {
            console.log(response);  // need to destructure data
            setbankCardData(response.data);
            console.log(bankCardData); 
            setLoaded(true);
            console.log(response); 
        }).catch((error) => {
            setLoaded(true);
            setError(error);
        })},[]); // when want it by button you would change the state in the square brackets - button changes state

// {useEffect(() => axios.get("http://localhost:8080/peopleBankAccount/readAll")
// .then((res) => {
//     const account = res.data;
//     console.log(res.data);
//     account.forEach(console.log(account));
// }).catch((error) => {
//     console.log(error);
// }) } 
return ( 
        <div>  
            {/* this could be a react fragment - better than doing lots of divs */}
            <h2> bank card page </h2>
            
       
        </div>
    
); 
}
 
export default BankCards;