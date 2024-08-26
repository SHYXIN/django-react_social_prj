import React from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../hooks/user.actions";


function ProtectedRoute({ children }) {

    // const auth  = JSON.parse(localStorage.getItem("auth"));
    // return auth && auth.user ? <>{children}</>: <Navigate to="/login/"/>

    const user = getUser();
    return user ? <>{children}</> : <Navigate to="/login/" />
}

export default ProtectedRoute;
