const Modal = ({ isOpen, closeModal, rating }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Thank You</h2>
        <p>
          You rated {rating} star{rating > 1 ? "s" : ""}
        </p>
        <button className="close-btn" onClick={closeModal}>
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
