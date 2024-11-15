import React, { useState } from "react";
import { FcFolder, FcFile } from "react-icons/fc";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import "./index.css";
import { Link } from "react-router-dom";

const RecursiveFolder = ({ folderObject, isFunctional }) => {
  const { Folders } = folderObject;
  const [expansion, setExpansion] = useState({});

  /**
   * The Id of each of the file/folder should be
   * unique for it to work.
   * 
   */

  const handleExpansion = (id) => {
    // Implement your logic here to handle folder expansion/collapse
    if (expansion[id]) {
      setExpansion({ ...expansion, [id]: !expansion[id] });
    } else {
      setExpansion({ ...expansion, [id]: true });
    }
  };

  return (
    <div className="recursive-folder">
      <ul>
        {/* TODO: Learn on how to build recursive components in react */}
        {Folders.map((folder) => {
          if (folder.Type === "file") {
            return (isFunctional ? <Link to={`/${folder.Path}`}><li key={folder.id}>
                <FcFile /> {folder.Name}
              </li></Link> :
              <li key={folder.id}>
                <FcFile /> {folder.Name}
              </li>
            );
          } else {
            return (
              <li key={folder.id}>
                {expansion[folder.id] ? (
                  <MdExpandMore onClick={() => handleExpansion(folder.id)} />
                ) : (
                  <MdExpandLess onClick={() => handleExpansion(folder.id)} />
                )}
                <FcFolder /> {folder.Name}
                {/* Let recursive component be executed on expansion only */}
                {expansion[folder.id] ? (
                  <RecursiveFolder folderObject={folder} isFunctional={isFunctional??false}/>
                ) : null}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default RecursiveFolder;
