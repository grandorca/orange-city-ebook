import { useEffect } from "react";
import { SearchContextValue } from "../../contexts/SearchContext";

const Modal = () => {
  //Receive context from SearchContext
  const { modalOpen, setModalOpen, selectedBook } = SearchContextValue();

  //Retrieve book data for modal
  const { title, description } = selectedBook;

  //Method that changes :root
  const scrollSetter = (visibility) => {
    document.documentElement.style.setProperty("--scroll-enabler", visibility);
  };

  //Change scroll value
  useEffect(() => {
    if (modalOpen) {
      scrollSetter("hidden");
    } else {
      scrollSetter("visible");
    }
  }, [modalOpen]);

  return modalOpen ? (
    <div
      className="modal-overlay"
      onClick={() => {
        setModalOpen(false);
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
            {title}
          </h1>
          <p className="modal-item" id="modal-description">
            {description ? description : "*No Description"}
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
