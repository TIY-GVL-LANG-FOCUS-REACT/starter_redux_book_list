import {
  BOOK_SELECTED,
  ADD_BOOK,
  DELETE_BOOK,
  TOGGLE_BOOK
 } from './types';

export function selectBook(book) {
  // console.log('A book has been selected', book.title);
  // always contains a type; sometimes contains a payload
  return {
    type: BOOK_SELECTED,
    payload: book
  }
}

export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: book
  }
}

export function deleteBook(book) {
  return {
    type: DELETE_BOOK,
    payload: book
  }
}

export function toggleBook(book) {
  return {
    type: TOGGLE_BOOK,
    payload: book
  }
}
