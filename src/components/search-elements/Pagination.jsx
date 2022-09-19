const Pagination = () => {
  return (
    <div>
      <div className="display-page">
        <div className="display-page-button-container">
          <button className="display-page-button" id="pre">
            Previous
          </button>
        </div>

        <div className="display-page-button-container">
          <button className="display-page-button" id="next">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
