import React from "react";
import { Navigate, Route, Outlet } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated"); // this is null because localStorage.getItem isn't where our jwt is stored
    console.log("this", isAuthenticated); // isAuthenticated is coming back as null


return isAuthenticated ? <Outlet /> : <Navigate to='/home'/>
// (
//         <Route
//           {...restOfProps}
//           render={(props) =>
//             isAuthenticated ? <Component {...props} /> : <Navigate to="/home" />
//           }
//         />
//       );
    }
    
    export default ProtectedRoute;