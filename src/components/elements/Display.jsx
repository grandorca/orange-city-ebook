import { useState } from "react";
import Modal from "./Modal";

const Display = (props) => {
  //reseive search result from Search component
  const books = props.searchResultsArray;

  //open book description modal
  const [bookModal, setBookModal] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = ({ bookVolInfo }) => {
    setBookModal({
      title: bookVolInfo.title,
      description: bookVolInfo.description,
    });
    setModalOpen(true);
  };

  return (
    <div className="display">
      {/* each book card */}
      {books.map((book) => {
        // let indexOfThisBook = books.indexOf(book) + 1;
        let bookVolInfo = book.volumeInfo;
        let bookCover =
          bookVolInfo.imageLinks && bookVolInfo.imageLinks.smallThumbnail;

        return (
          <div className="book-card" key={book.id}>
            <img
              className="book-item"
              id="book-cover"
              alt="book cover"
              src={bookCover}
              book-id={book.id}
              onClick={() => {
                openModal({ bookVolInfo });
              }}
            ></img>

            <div className="book-detail">
              <h2 className="book-item" id="book-title">
                <span
                  onClick={() => {
                    openModal({ bookVolInfo });
                  }}
                >
                  {bookVolInfo.title}
                </span>
              </h2>
              <p className="book-item" id="book-authors">
                {bookVolInfo &&
                bookVolInfo.authors &&
                bookVolInfo.authors.length > 1 ? (
                  <span>
                    <span className="detail-sub-title">Authors:&nbsp;</span>
                    {bookVolInfo.authors.map((author) => {
                      return (
                        <span key={author}>
                          {author}&nbsp;&nbsp;|&nbsp;&nbsp;
                        </span>
                      );
                    })}
                  </span>
                ) : bookVolInfo && bookVolInfo.authors ? (
                  <span>
                    <span className="detail-sub-title">Author:&nbsp;</span>
                    {bookVolInfo.authors.map((author) => {
                      return <span key={author}>{author}</span>;
                    })}
                  </span>
                ) : null}
              </p>
              <p className="book-item" id="book-pulisher">
                <span className="detail-sub-title">Publisher:&nbsp;</span>
                {bookVolInfo.publisher}
              </p>
              <p className="book-item" id="book-publishedDate">
                <span className="detail-sub-title">Published Date:&nbsp;</span>
                {bookVolInfo.publishedDate}
              </p>
            </div>
          </div>
        );
      })}

      {/* book description modal with full book title */}
      <Modal
        bookModal={bookModal}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
};

export default Display;
