import React, { Component } from "react";
import BookChanger from "./BookChanger";

class Book extends Component {
  render() {
    const { book, updateBook } = this.props;
    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage:
                  book.imageLinks && `url(${book.imageLinks.thumbnail})`,
              }}
            />
            <BookChanger book={book} updateBook={updateBook} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors && book.authors.join(", ")}
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
