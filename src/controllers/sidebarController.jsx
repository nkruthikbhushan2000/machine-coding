import React, { useState } from "react";
import SideBar from "../components/sidebar";
import MenuStructure from "../utils/MenuStructure.json";

const SideBarController = ({
  title,
  content,
  enableFooter,
  footer,
  isOpen,
  onClose,
  buttonIcon,
  isFunctional,
}) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="sidebar-controller">
      <button onClick={onClose?? toggleSidebar}>{buttonIcon ?? "Toggle Sidebar"}</button>
      <SideBar
        isOpen={isOpen ?? openSidebar}
        onClose={onClose ?? toggleSidebar}
        title={title ?? "Menu"}
        content={content ?? MenuStructure}
        enableFooter={enableFooter ?? true}
        isFunctional={isFunctional ?? false}
        footer={
          footer ?? (
            <div>
              <button>Save</button>
              <button onClick={onClose ?? toggleSidebar}>Cancel</button>
            </div>
          )
        }
      />
    </div>
  );
};

export default SideBarController;
