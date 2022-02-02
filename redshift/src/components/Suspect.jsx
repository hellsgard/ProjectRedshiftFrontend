const Suspect = ({citizenID, forenames, surname, homeAddress, dateOfBirth, placeOfBirth, sex}) => {
    return ( 
        <div>
            <h5> {forenames} </h5>
            <h5> {surname} </h5>
            <h5> {homeAddress} </h5>
            <h5> {dateOfBirth} </h5>
            <h5> {placeOfBirth} </h5>
            <h5> {sex} </h5>
        </div>
     );
}
 
export default Suspect;