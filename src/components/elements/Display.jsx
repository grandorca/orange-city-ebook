import { useState } from "react";
import Popup from "./Popup";

const Display = (props) => {
  //reseive search result from Search component
  const books = props.searchResults.items;

  //view book description
  const [popupTrigger, setPopupTrigger] = useState(false);

  const openPopup = () => {
    setPopupTrigger(false);
  };

  return (
    <div className="display">
      {/* each book */}
      {books.map((book) => {
        // let indexOfThisBook = books.indexOf(book) + 1;
        let bookInfo = book.volumeInfo;
        let bookCover =
          bookInfo.imageLinks && bookInfo.imageLinks.smallThumbnail;

        return (
          <div className="book-card" key={book.id}>
            <img
              className="book-item"
              id="book-cover"
              alt="book cover"
              src={bookCover}
              onClick={openPopup}
            ></img>

            <div className="book-detail">
              <h2 className="book-item" id="book-title">
                <span onClick={openPopup}>{bookInfo.title}</span>
              </h2>
              <p className="book-item" id="book-authors">
                {bookInfo.authors.length > 1 ? (
                  <span>
                    <span className="detail-sub-title">Authors:&nbsp;</span>
                    {bookInfo.authors.map((author) => {
                      return (
                        <span key={author}>
                          {author}&nbsp;&nbsp;|&nbsp;&nbsp;
                        </span>
                      );
                    })}
                  </span>
                ) : (
                  <span>
                    <span className="detail-sub-title">Author:&nbsp;</span>
                    {bookInfo.authors.map((author) => {
                      return <span key={author}>{author}</span>;
                    })}
                  </span>
                )}
              </p>
              <p className="book-item" id="book-pulisher">
                <span className="detail-sub-title">Publisher:&nbsp;</span>
                {bookInfo.publisher}
              </p>
              <p className="book-item" id="book-publishedDate">
                <span className="detail-sub-title">Published Date:&nbsp;</span>
                {bookInfo.publishedDate}
              </p>
            </div>

            {/* book description popup with full title */}
            <Popup
              trigger={popupTrigger}
              bookTitle={bookInfo.title}
              bookDescription={bookInfo.description}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Display;
