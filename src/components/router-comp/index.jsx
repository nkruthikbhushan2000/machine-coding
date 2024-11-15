import React from "react";
import { Routes, Route } from "react-router-dom";
import ModalController from "../../controllers/modalController";
import PasswordGenerator from "../password-generator";
import RecursiveFolder from "../recursive-folder";
import MenuStructure from "../../utils/MenuStructure.json";
import FolderStructure from "../../utils/FolderStructure.json";
import SideBarController from "../../controllers/sidebarController";
import ImageCarousel from "../image-carousel";
import GridComponent from "../grid-event";

//TODO:Implement lazy loading for different componenets

export const mapIdToComponent = {
  1: <RecursiveFolder folderObject={FolderStructure} isFunctional={false}/>,
  2: <ModalController />,
  3: <SideBarController />,
  4: <PasswordGenerator />,
  5: <ImageCarousel />,
  6: <GridComponent />,
  // Add other components as needed
};

const RouterApp = () => {
  const { Folders } = MenuStructure;
  return (
      <Routes>
        <Route
          path="/"
          exact
          //TODO: Home Page
          element={<>Please select any one component from Menu.</>}
        />
        {Folders.map((folder) => {
          if (folder.Type === "file") {
            return (
              <Route
                key={folder.id}
                path={`/${folder.Path}`}
                exact
                element={mapIdToComponent[folder.id]}
              />
            );
          }
        })}
      </Routes>
  );
};

export default RouterApp;
