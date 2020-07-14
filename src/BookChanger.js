import React, { Component } from "react";

class BookChanger extends Component {
  handleChange = (e) => {
    const value = e.target.value;
    this.props.updateBook(this.props.book, value);
  };

  render() {
    return (
      <div>
        <div className="book-shelf-changer">
          <select value={this.props.book.shelf} onChange={this.handleChange}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
    );
  }
}

export default BookChanger;
