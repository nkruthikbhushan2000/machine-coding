import React from "react";
import "./index.css";

const ModalComp = ({ children, footer, isOpen, onClose, title }) => {

  const backDropClose = (event) => {
    /*TODO: Learn about Event propagation, event delegation 
     event capturing and trickling
    */
      if (isOpen && event.target.dataset.backdrop === "true") {
        onClose();
      }
  };

  return (
    <div
      className={`modal ${isOpen ? "" : "disable-modal"}`}
      onClick={(event) => backDropClose(event)}
      data-backdrop={"true"}
    >
      <div className="modal-wrapper">
        <h2>{title}</h2>
        {children}
        {footer}
      </div>
    </div>
  );
};

export default ModalComp;
