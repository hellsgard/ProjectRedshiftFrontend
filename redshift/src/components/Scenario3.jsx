import Navb from "./Navb.jsx";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import JWT from '../config/config.json';
import axios from 'axios';



const Scenario3 = () => {
const [vehicleReg, setVehicleReg] = useState("");
const [fleesData, setFleesData] = useState([]);

const clearFields = () => {
  console.log("function to clear search fields");
}

const createQueryFlees = () => {
  const token = localStorage.getItem(JWT);
  const queryFlees = {
    vehicleReg: vehicleReg
  };
  axios.get("http://localhost:8080/queryIncident/querySuspectFlees", {params: queryFlees, headers: {'Authorization': `Bearer ${token}`}})
  .then((response) => {
      console.log(response.data)
      setFleesData(response.data);
  })
  .catch((error) => {
      console.log(error);
  })};


  return (
    <div>
      <Navb></Navb>
      {/* <h2 className="centre">Suspect flees the scene of a crime</h2>
        <h4> Please bare with us whilst we work on this</h4>
        <img src="working.png" alt="Work in progress"></img> */}
        <h5>Please enter a vehicle registration</h5>
      <TextField
        id="standard-basic"
        label="Seconds"
        variant="outlined"
        type="text"
        placeholder="Seconds"
        name="Seconds"
        value={vehicleReg}
        onChange={(e) => setVehicleReg(e.target.value)}
      />
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          id="reset"
          onClick={() => clearFields()}
          startIcon={<DeleteIcon />}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          type="button"
          onClick={() => createQueryFlees()}
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </Stack>
    </div>
  );
};

export default Scenario3;
