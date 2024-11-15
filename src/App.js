import React from "react";
import "./App.css";
import MenuStructure from "./utils/MenuStructure";
import SideBarController from "./controllers/sidebarController";
import { TiThMenu } from "react-icons/ti";
// import { RxExit } from "react-icons/rx";
import RouterApp from "./components/router-comp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-outer-wrapper">
        <div className="app-header">
          <SideBarController
            title={"MenuList"}
            content={MenuStructure}
            enableFooter={false}
            isFunctional={true}
            buttonIcon={<TiThMenu />}
          />
          <h2>Machine Coding Problems</h2>
          <div className="exit-container">
            {/* <RxExit width={"1.5rem"} /> */}
          </div>
        </div>
        <div className="App">
          <RouterApp />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
