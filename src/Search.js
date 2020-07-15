import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const Search = (props) => {
  const { updateBook, searchBooks, clearSearch, query, updateQuery } = props;

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={clearSearch}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={updateQuery}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooks &&
            searchBooks.map((updatedBook) => {
              return (
                <Book
                  key={updatedBook.id}
                  book={updatedBook}
                  updateBook={updateBook}
                />
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default Search;
