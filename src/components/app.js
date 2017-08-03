import React, { Component } from 'react';
import './../App.css';

import BookList from './../containers/book-list';
import BookDetail from './../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList store={this.props.store}/>
        <BookDetail />
      </div>
    );
  }
}
