import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={onClose} primary>
        I accept!
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={onClose} actionBar={actionBar}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        laborum debitis illum eaque explicabo corporis? Nesciunt odio neque
        culpa consequatur?
      </p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
