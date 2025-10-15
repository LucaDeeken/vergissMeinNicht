import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import closeBtn from "../assets/images/close.png";

function Modal({ children, onClose, setModalOpen }) {
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img
          className={styles.closeBtn}
          src={closeBtn}
          alt="closeButton"
          aria-label="close Modal"
          onClick={() => setModalOpen(false)}
        />
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
