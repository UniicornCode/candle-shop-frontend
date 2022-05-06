import { Navigate } from 'react-router-dom';
import React from "react";

const ProtectedRoute = ({ children }) => {

    const token = localStorage.getItem("user");

    if (!token) {
        return <Navigate to="/login" replace/>;
    }

    return children;
};

export default ProtectedRoute;