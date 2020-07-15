import React from "react";
import Book from "./Book";

const Bookshelf = (props) => {
  const { shelf, shelfkey, books, updateBook } = props;

  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {// filter out books that match the shelf
            books
              .filter((book) => book.shelf === shelfkey)
              .map((book) => (
                <Book key={book.id} book={book} updateBook={updateBook} />
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
