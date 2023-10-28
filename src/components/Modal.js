import ReactDOM from "react-dom";
import Button from "../components/Button";

function Modal({ onClose }) {
  return ReactDOM.createPortal(
    <div>
      {/* inset-0 : bütün sayfayı kaplar */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      {/* burası modal */}
      <div className="absolute inset-80 p-10 bg-white">
        This a modal!
        <div>
          <Button onClick={onClose} primary>
            Close Modal
          </Button>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
