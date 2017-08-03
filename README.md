# Introduction to React-Redux

## What is Redux?

Redux is a predictable state container for JavaScript applications. State is a collection of all the data that describes the app.

All of the application's data is centralized in a single object.

Having a sense of how to design the state of your application is critical. Changing the design can be painful!


## What are reducers?

A reducer is a function that returns a piece of the application state.

For the book list application, we have two pieces of state - the  list of books and the currently selected book.

One reducer will be responsible for returning the list of books; one reducer will be responsible for returning the currently selected book.

State might look like:
{
  books: [],
  activeBook: {}
}

## What is an action creator?

An action creator is a function that returns an action (an object). Action has type (required) and payload (not required). An action creator is triggered by an event (e.g. page load, button click, etc.)

The object returned from an action creator is sent to all reducers inside the application. Reducers choose, depending on what the action is, to return a different piece of state (doesn't have to care about the action - does nothing). That newly returned piece of state then gets piped into application state which gets sent to React and causes the DOM to show new data.

trigger event > call action creator > returns action > action flows through reducers > reducers assembly new state > new state flows into all the containers

## What are middlewares?

Middlewares are functions that take an action and, depending on the type and payload, the middleware can choose the action to pass through, manipulate the action, stop the action, etc...

Middlewares are gatekeepers of sorts. You can go, you can go on a condition, or you can't go.

You can many different pieces of middlewares in your application.

e.g. redux-promise


## Steps Day One

* create the books reducer
* create book list component (container)
  * container is a component that has direct access to state that is produced by redux
  * want most parent component that cares about state for your container
  * only create containers out of components that care about a particular piece of state
* connect book list to redux
  * whenever application state changes, container will re-render
* create an action creator
  * active book will change over time; it is an dynamic piece of state; changing our state is what actions and action creators are for
* call action from book-list when book is clicked
  * implement mapDispatchToProps
  * implement bindActionCreators and dispatch
* create reducer_active_book
* create book-detail component (container)
* connect book-detail to redux

## Steps Day Two

* implement ADD_BOOK action
