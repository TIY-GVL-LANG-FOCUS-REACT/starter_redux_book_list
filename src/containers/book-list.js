import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

// wire action up to redux
// selectBook is a plain js object; it a plain function
import { selectBook, addBook, deleteBook, toggleBook } from './../actions/index'; // passed to mapDispatchToProps
import { bindActionCreators } from 'redux';

class BookList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      books: this.props.books,
      filter: ''
    }

    this._handleInput = this._handleInput.bind(this);
    this._addBook = this._addBook.bind(this);
    this._handleFilter = this._handleFilter.bind(this);
  }

  _handleInput(event) {
    event.preventDefault();
    // console.log('here', event.target.value);
    let title = event.target.value;
    this.setState({ title });
  }

  _handleFilter(event) {
    event.preventDefault();
    console.log(event.target.value);
    let filter = event.target.value;
    this.setState({ filter });
  }

  _addBook(event) {
    event.preventDefault();
    let title = this.state.title;
    // this.props.store.dispatch({type: 'ADD_BOOK', payload: book});
    this.props.addBook(title);
    this.setState({ title: '' });
  }

  render() {

    let books = this.props.books.filter((book)=> _.includes(book.title.toLowerCase(), this.state.filter.toLowerCase()));
    // console.log('filter', this.state.filter);
    books = books.map((book) => {
      console.log('book', book);
      return (
        <li key={ book.title } className='list-group-item'>
          <span onClick={ () => this.props.selectBook(book) }>{ book.title }</span>
          <span>{ book.completed ? 'completed' : 'incomplete' }</span>
          <button onClick={ () => this.props.deleteBook(book)}>DELETE BOOK</button>
          <button onClick={ () => this.props.toggleBook(book)}>MARK COMPLETE</button>
        </li>
      )
    })
    return(
      <div>
        <form onSubmit={ this._addBook }>
          <input type='text' placeholder='add a new book' value={ this.state.title } onChange={ this._handleInput}/>
          <input type='submit' />
        </form>
        <input type='text' placeholder='filter books' value={ this.state.filter } onChange={ this._handleFilter } />
        <ul className='list-group col-sm-4'>
          { books }
        </ul>
      </div>
    )
  }
}

// in order to use this.props.books
// react and redux are completely separate
// we join them with react-redux
// import connect

function mapStateToProps(state) {

  // if(state.filter != null) {
  //   console.log('filter', state.filter);
  //books = _.filter(books, (obj) => _.includes(obj.title.toLowerCase(), state.filter.toLowerCase()) )
  // }

  // console.log('books', books);

  // console.log('state', state);
  // whatever gets returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

// anything returned will end up as props on BookList
// can call this.props.selectBook
// the purpose of bindActionCreators and dispatch is to make sure the actions flow through all reducers
function mapDispatchToProps(dispatch) {
  // when selectBook is called, result is sent to all reducers
  // you're going to call selectBook, it's an action creator, whenever it's called, make sure the result is patch to dispatch function
  // dispatch function funnels actions to all the reducers inside the application
  return bindActionCreators({ selectBook, addBook, deleteBook, toggleBook }, dispatch);
}

// connect: take this components, take this mapStateToProps and return a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
