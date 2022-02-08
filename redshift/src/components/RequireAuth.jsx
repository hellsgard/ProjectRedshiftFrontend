import { Navigate, useLocation } from "react-router-dom";


const RequireAuth =({ children }) => {
  let auth = true;
  let location = useLocation();

  return auth ? children: <Navigate to="/" state={{ from: location }} replace />;
}

export default RequireAuth;