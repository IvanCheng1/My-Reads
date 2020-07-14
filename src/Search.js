import React, { Component } from "react";
import { Link } from "react-router-dom";
// import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class Search extends Component {
  state = {
    query: "",
  };

  updateQuery = (e) => {
    const query = e.target.value;
    this.setState({ query: query });

    // fetch API if search query is more than 1 char long
    if (query.length > 1) {
      this.props.fetchSearchBooks(query);
    } else if (query.length === 0) {
      // clear search if query is empty
      this.props.clearSearch();
    }
  };

  render() {
    const { updateBook, searchBooks, clearSearch } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={clearSearch}>
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.updateQuery}
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
  }
}

export default Search;
