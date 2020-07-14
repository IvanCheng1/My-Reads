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
      this.props.fetchSearchBooks(this.state.query);
    } else if (query.length === 0) {
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
            {/*
                          NOTES: The search from BooksAPI is limited to a particular set of search terms.
                          You can find these search terms here:
                          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
      
                          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                          you don't find a specific author or title. Every search is limited by search terms.
                        */}

            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.updateQuery}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.query}
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
