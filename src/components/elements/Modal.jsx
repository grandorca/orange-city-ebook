const Modal = (props) => {
  //reseive book information from Display component
  let bookInfo = props.bookModal;

  return props.modalOpen ? (
    <div
      className="modal-overlay"
      onClick={() => {
        props.setModalOpen(false);
      }}
    >
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal-content">
          <h1 className="modal-item" id="modal-title">
            {bookInfo.title}
          </h1>
          <p className="modal-item" id="modal-description">
            {bookInfo.description ? bookInfo.description : "*No Description"}
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
