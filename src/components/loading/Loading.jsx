import React from 'react';
import {MetroSpinner} from "react-spinners-kit";

const Loading = () => {
    return (
        <>
            <MetroSpinner size={50}
                          color="white"
                          loading={true}/>
        </>
    )
};
export default Loading;