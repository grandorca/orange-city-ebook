// import {useEffect} from "react";

const Modal = (props) => {
  //   let modalTrigger;
  // useEffect(()=>{
  //   modalTrigger= props.clickedBookId === props.bookId;
  //   console.log(props.bookId, props.clickedBookId);

  // },[props.clickedBookId])

  return false ? (
    <div className="modal">
      <h1 className="modal-item" id="modal-title">
        {props.bookTitle}
      </h1>
      <p className="modal-item" id="modal-description">
        {props.bookDescription}
      </p>
    </div>
  ) : null;
};

export default Modal;
