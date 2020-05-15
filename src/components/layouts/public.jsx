import React from "react";
import Register from "../Register";
import SignIn from "../Login";

const PublicLayout = (props) => {
    console.log();
    return (
        <>
            {
                props && props.children.props.path === "/login" ?
                    <SignIn/>
                    :
                <Register/>
            }
        </>
    )

};
export default PublicLayout
