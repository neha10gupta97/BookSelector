import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render(){
    if(!this.props.book){
      return(
        <div>Please select a book to get started !!</div>
      )
    }
    return(
      <div>
        <div className="book-detail-heading">Details about selected book:</div>
        <div><span className="bold-text">Title:</span> {this.props.book.title}</div>
        <div><span className="bold-text">Author:</span> {this.props.book.author}</div>
        <div><span className="bold-text">Reviews:</span> {this.props.book.review}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    book: state.activeBook
  };
}

export default connect (mapStateToProps)(BookDetail);