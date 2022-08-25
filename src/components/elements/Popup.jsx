const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <h1 className="popup-item" id="popup-title">
        {props.bookTitle}
      </h1>
      <p className="popup-item" id="popup-description">
        {props.bookDescription}
      </p>
    </div>
  ) : null;
};

export default Popup;
