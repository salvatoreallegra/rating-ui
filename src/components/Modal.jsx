const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>Thanks for your Rating!</p>
        <button className="modal-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
