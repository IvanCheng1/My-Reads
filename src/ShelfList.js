import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

class ShelfList extends Component {
  render() {
    const { books, bookshelves, updateBook } = this.props;

    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <div className="list-books-content">
            {bookshelves.map((shelf) => (
              <Bookshelf
                shelf={Object.values(shelf)}
                shelfkey={Object.keys(shelf)[0]}
                key={Object.keys(shelf)[0]}
                books={books}
                updateBook={updateBook}
              />
            ))}
          </div>
          <div className="open-search">
            <Link to="/search">
              <button>Add a book</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ShelfList;
