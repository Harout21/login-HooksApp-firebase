import React, { useState } from "react";
import Page from "./Page";
import SideBar from "./SideBar";
import styled from "styled-components";
import "./styles.css";

const StyledApp = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

const DashboardRender = (props) => {
    const [openDrawer, updateDrawer] = useState(false);


    const toggleDrawer = () => {
        updateDrawer(!openDrawer);
    };


    return (
        <StyledApp className={`app-wrapper${openDrawer ? " open-drawer" : ""}`}>
            <SideBar openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
            <Page openDrawer={openDrawer} history={props} />
        </StyledApp>
    );
}
export default DashboardRender