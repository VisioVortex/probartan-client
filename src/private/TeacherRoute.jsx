import { useContext } from "react";

import { Navigate } from "react-router-dom";

import { AuthContext } from "../providers/AuthProvider";

function TeacherRoute({ children }) {

  const { user, role, loading } =
    useContext(AuthContext);

  if (loading || role === null) {

    return <h1>Loading...</h1>;

  }

  if (user && role === "teacher") {

    return children;

  }

  return <Navigate to="/access-denied" />;
}

export default TeacherRoute;