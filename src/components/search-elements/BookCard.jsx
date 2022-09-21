import { SearchContextValue } from "../../contexts/SearchContext";

const BookCard = (props) => {
  const { setModalOpen, setSelectedBook } = SearchContextValue();

  //Retrieve book information from props
  const thisBook = props.bookObject;
  const bookVolInfo = thisBook.volumeInfo;
  const bookCover =
    bookVolInfo.imageLinks && bookVolInfo.imageLinks.smallThumbnail;
  const { title, subtitle, authors, publisher, publishedDate } = bookVolInfo;

  //Set and open book description modal function
  const openTheModal = (bookVolInfo) => {
    setSelectedBook({
      title: bookVolInfo.title,
      description: bookVolInfo.description,
    });
    setModalOpen(true);
  };

  return (
    <div className="book-card">
      <img
        className="book-item"
        id="book-cover"
        alt="no book cover"
        src={bookCover}
        onClick={() => {
          openTheModal(bookVolInfo);
        }}
      ></img>
      <div className="book-detail-div">
        <h2
          className="book-item"
          id="book-title"
          onClick={() => {
            openTheModal(bookVolInfo);
          }}
        >
          {title}
        </h2>
        <h2 className="book-item" id="book-subtitle">
          {subtitle}
        </h2>
        <p className="book-item" id="book-authors">
          {authors && authors.length > 1 ? (
            <span>
              <span className="detail-key">Authors:&nbsp;</span>
              {authors.map((author) => {
                return (
                  <span key={author}>{author}&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                );
              })}
            </span>
          ) : authors ? (
            <span>
              <span className="detail-key">Author:&nbsp;</span>
              {authors.map((author) => {
                return <span key={author}>{author}</span>;
              })}
            </span>
          ) : null}
        </p>
        <p className="book-item" id="book-pulisher">
          <span className="detail-key">Publisher:&nbsp;</span>
          {publisher}
        </p>
        <p className="book-item" id="book-publishedDate">
          <span className="detail-key">Published Date:&nbsp;</span>
          {publishedDate}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
