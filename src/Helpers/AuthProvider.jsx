import React from "react";
import AuthUser from "./AuthUser";
import Login from "../Components/Containers/Login";

function AuthProvider( props) {
    if(AuthUser()) {
        return (
            <div>
                {props.children}
            </div>
        );
    } else {
        return (
            <Login/>
        );
    }
}

export default AuthProvider;
