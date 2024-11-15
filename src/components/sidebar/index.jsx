import React from "react";
import "./index.css";
import RecursiveFolder from "../recursive-folder";

const SideBar = ({
  isOpen,
  onClose,
  title,
  content,
  enableFooter,
  footer,
  isFunctional,
}) => {
  const handleClickBackDrop = (event) => {
    if (isOpen && event.target.dataset.backdrop === "true") onClose();
  };

  return (
    <div
      className={`sidebar ${isOpen ? "" : "sidebar-no-display"}`}
      data-backdrop={"true"}
      onClick={(e) => handleClickBackDrop(e)}
    >
      <div className="sidebar-wrapper">
        <h4>{title}</h4>
        <RecursiveFolder
          folderObject={content}
           isFunctional={isFunctional ?? false}
        />
        {enableFooter && <div className="footer-wrapper">{footer}</div>}
      </div>
    </div>
  );
};

export default SideBar;
