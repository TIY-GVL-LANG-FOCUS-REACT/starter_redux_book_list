// create the reducer
// wire it into the application inside reducers/index.js
import _ from 'lodash';
import { ADD_BOOK, DELETE_BOOK, TOGGLE_BOOK } from './../actions/types';

const books = [
    { id: 0, title: 'Lord of the Flies', completed: true },
    { id: 1, title: 'The Great Gatsby', completed: false },
    { id: 2, title: 'Eloquent JavaScript', completed: true }
  ]

export default function( state = books, action ) {
  switch(action.type) {
    case ADD_BOOK:
      return [
        {
          id: state.reduce((sum, value) => Math.max(value.id, sum), -1) + 1,
          completed: false,
          title: action.payload
        }, ...state ];
      // break;
      // return [ ...state, action.payload ];
    case DELETE_BOOK:
      // utilize lodash library
      return _.reject(state, action.payload);
      // break;
    case TOGGLE_BOOK:
      return state.map(book => (book === action.payload) ? { ...book, completed: !book.completed } : book)
      // break;
    default:
      return state
  }

}
