// import { useState } from "react";
import Modal from "./Modal";

const Display = (props) => {
  //reseive search result from Search component
  const books = props.searchResults.items;

  //open book description modal
  // const [clickedBookId, setClickedBookId] = useState("");

  const openPopup = (clickedBook) => {
    // console.log(clickedBook.target.getAttribute("book-id"));
    // const clickedBookId = clickedBook.target.getAttribute("book-id");
    // setClickedBookId(`${clickedBookId}`);
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
              book-id={book.id}
              onClick={(e) => openPopup(e)}
            ></img>

            <div className="book-detail">
              <h2 className="book-item" id="book-title">
                <span onClick={(e) => openPopup(e)}>{bookInfo.title}</span>
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

            {/* book description modal with full title */}
            <Modal
              // clickedBookId={clickedBookId}
              bookId={`${book.id}`}
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
