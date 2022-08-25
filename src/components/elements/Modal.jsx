// import {useEffect} from "react";

const Modal = (props) => {
  //reseive search result from Display component
  const bookInfo = props.bookInfo;

  //   let modalTrigger;
  // useEffect(()=>{
  //   modalTrigger= props.clickedBookId === props.bookId;
  //   console.log(props.bookId, props.clickedBookId);

  // },[props.clickedBookId])

  return false ? (
    <div className="modal-overlay" onClick={() => {}}>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1 className="modal-item" id="modal-title">
          {bookInfo.title}
        </h1>

        <p className="modal-item" id="modal-description">
          {bookInfo.description}
        </p>
      </div>
    </div>
  ) : null;
};

export default Modal;
