import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import ShelfList from "./ShelfList";
import Search from "./Search";

const bookshelves = [
  { currentlyReading: "Currently Reading" },
  { wantToRead: "Want To Read" },
  { read: "Read" },
];

class BooksApp extends React.Component {
  state = {
    Books: [],
    searchBooks: [],
  };

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ Books: books });
    });
  };

  fetchSearchBooks = (query) => {
    BooksAPI.search(query)
      .then((searchBooks) => {
        // if returns a list of books
        if (!searchBooks.error) {
          searchBooks.forEach((searchBook) => {
            this.state.Books.forEach((book) => {
              // if id match in local books, update shelf
              if (searchBook.id === book.id) {
                searchBook.shelf = book.shelf;
              } else if (!searchBook.shelf) {
                searchBook.shelf = "none";
              }
            });
          });
        } else {
          // no search results
          searchBooks = [];
        }

        // save results
        this.setState({ searchBooks: searchBooks });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  clearSearch = () => {
    this.setState({
      searchBooks: [],
    });
  };

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf);

    // filter out and remove the selected book
    this.setState((currentState) => ({
      Books: currentState.Books.filter(
        (filterBooks) => filterBooks.id !== book.id
      ),
    }));

    // if shelf is not none, change the shelf of the 'book' and concat to state
    if (shelf !== "none") {
      book.shelf = shelf;
      this.setState((currentState) => ({
        Books: currentState.Books.concat([book]),
      }));
    }
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <Search
              updateBook={this.updateBook}
              searchBooks={this.state.searchBooks}
              fetchSearchBooks={this.fetchSearchBooks}
              clearSearch={this.clearSearch}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={() => (
            <ShelfList
              books={this.state.Books}
              bookshelves={bookshelves}
              updateBook={this.updateBook}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
