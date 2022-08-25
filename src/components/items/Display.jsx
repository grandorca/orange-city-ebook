const Display = (props) => {
  const books = props.searchResults.items;

  return (
    <div className="display">
      {/* book description popup when clicked */}
      <div className="display-popup">
        <div className="display-header">
          <span>description</span>
          <span></span>
        </div>
        <p></p>
      </div>

      {/* each book card */}
      {books.map((book) => {
        let bookInfo = book.volumeInfo;
        let bookCover =
          bookInfo.imageLinks && bookInfo.imageLinks.smallThumbnail;

        return (
          <div className="display-book" key={book.id}>
            <img
              className="book-item"
              id="book-cover"
              alt="book cover"
              src={bookCover}
            ></img>

            <h2 className="book-item" id="book-title">
              {bookInfo.title}
            </h2>

            <p className="book-item" id="book-detail"></p>

            <p className="book-item" id="book-authors">
              {bookInfo.authors.length > 1 ? (
                <p>
                  Authors:&nbsp;
                  {bookInfo.authors.map((author) => {
                    return (
                      <span key={author}>
                        {author}&nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                    );
                  })}
                </p>
              ) : (
                <p>
                  Author:&nbsp;
                  {bookInfo.authors.map((author) => {
                    return <span key={author}>{author}</span>;
                  })}
                </p>
              )}
            </p>

            <p className="book-item" id="book-pulisher">
              {bookInfo.publisher}
            </p>
            <p className="book-item" id="book-publishedDate">
              {bookInfo.publishedDate}
            </p>

            <p className="book-item" id="book-description">
              {bookInfo.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Display;
