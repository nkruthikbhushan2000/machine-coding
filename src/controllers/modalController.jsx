import React from "react";
import ModalComp from "../components/modal";

const ModalController = () => {
  const [showModal, setShowModal] = React.useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      <ModalComp
        onClose={toggleModal}
        title="Test Modal"
        footer={
          <div>
            <button>Submit</button>
            <button onClick={toggleModal}>Cancel</button>
          </div>
        }
        isOpen={showModal}
      >
        <p>Some content inside the modal</p>
      </ModalComp>
    </div>
  );
};

export default ModalController;
