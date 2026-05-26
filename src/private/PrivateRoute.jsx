import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../providers/AuthProvider";

function PrivateRoute({ children }) {

  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Loading...
        </h1>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;