import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
// import Lock from "./Lock.jsx";
import Scenario1 from "./Scenario1.jsx";
import Scenario2 from "./Scenario2.jsx";
import Scenario3 from "./Scenario3.jsx";
import Home from "./Home.jsx";
import BankDetails from "./BankDetails";
import AtmTransactions from "./AtmTransactions";
import AtmPoint from "./AtmPoint";
import Vehicles from "./Vehicles";
import Epos from "./Epos";
import EposTransactions from "./EposTransactions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BankCards from "./BankCards";
import BasicInformation from "./BasicInformation";
import { useEffect, useState } from 'react';

const Manager = () => {


    const [userAudit, setUserAudit] = useState("");
    const saveUserName = (namedUser) => setUserAudit(namedUser);
    
    

    return ( 
        <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login showUser={userAudit} saveUser={setUserAudit}/>}></Route> 
          {/* <Route path="/login" element={<Login />}></Route> */}
          <Route path="/logout" element={<Logout />}></Route>
          {/* <Route path="/lock" element={<Lock />}></Route> */}
          <Route path="/scenario1/:id" element={<Scenario1 />}></Route>
          <Route path="/scenario2" element={<Scenario2 />}></Route>
          <Route path="/scenario3" element={<Scenario3 />}></Route>
          {/* <Route path="/home" element={<RequireAuth/>}></Route> */}
          <Route path="/home" element={<Home showUser={userAudit} />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/bankdetails" element={<BankDetails />}></Route>
          <Route path="/bankCards" element={<BankCards />}></Route>
          <Route path="/atmtransactions" element={<AtmTransactions />}></Route>
          <Route path="/atmpoint" element={<AtmPoint />}></Route>
          <Route path="/vehicles" element={<Vehicles />}></Route>
          <Route
            path="/suspectProfile/basicInfo"
            element={<BasicInformation />}
          ></Route>

          <Route path="/epos" element={<Epos />}></Route>
          <Route
            path="/epostransactions"
            element={<EposTransactions />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>



     );
}
 
export default Manager;