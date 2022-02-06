import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MobileDataInfo = ({ forenames, surname, dateOfBirth }) => {


    const [mobileRecords, setmobileRecords] = useState("");
    const [pageLoaded, setPageLoaded] = useState(false);
    const [callRecords, setCallRecords] = useState([]);
    const [error, setError] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [queryInfoState, setQueryInfoState] = useState(0);


    const queryInfo = {
        forenames: forenames,
        surname: surname,
        dateOfBirth: dateOfBirth,
    }

    useEffect(() => {

        if (queryInfo.forenames == undefined){
            setTimeout(10000);
            setQueryInfoState(queryInfoState+1);
        } else {
            getMobileRecords(queryInfo);
        };
    }, [queryInfoState]);

    const getMobileRecords = ((queryInfo) => {
        axios.get(`http://localhost:8080/queryPerson/mobile`, { params: queryInfo })
            .then( async (response) => {
                setmobileRecords(response.data[0]);
                setPhoneNumber(response.data[0].phoneNumber);
                console.log(response.data[0]);
                const info = response.data[0];
                getCallRecords(info);
            }
            ).catch((error) => {
                setError(error);
            })
    })


    const getCallRecords = ((info) => {
        axios.get(`http://localhost:8080/queryPerson/callRecords`, { params: info })
            .then((response) => {
                setCallRecords(response.data);
                setPageLoaded(true);
            })
    });




    if(error == true) {
        return <h2> Oops, theres been an error :o please refresh the page </h2>
    } else if(!pageLoaded ) { // Loaded is not true / false
        return <h2> Please wait, data is loading! </h2>
    } else {
        return (
            <div>
                <h4>Phone Number: {mobileRecords.phoneNumber}</h4>
                
                {callRecords.map((record) => {
                    return(
                        <div>
                            <Card>
                                <p>TimeStamp: {record.timestamp}</p>
                                <p>Caller Number: {record.callerMSISDN}</p>
                                <p>Receiver Number: {record.receiverMSISDN}</p>
                            </Card>
                        </div>
                        )
                })}


            </div>
        )
    }
}
export default MobileDataInfo;