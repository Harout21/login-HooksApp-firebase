import React from "react";
import {Route, Redirect} from "react-router-dom";
import PrivateLayout from "../components/layouts/private";

const PrivateRoute = ({component: Component, ...rest}) => (
    <PrivateLayout>
        <Route
            {...rest}
            render={props =>
                sessionStorage.getItem("token") ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{pathname: "/login", state: {from: props.location}}}
                    />
                )
            }
        />
    </PrivateLayout>
);
export default PrivateRoute