// create the reducer
// wire it into the application inside reducers/index.js
import { BOOK_SELECTED } from './../actions/types'

// all reducers get two arguments, current state and action
// state argument is not applicaiton state; only state reducer is responsible for
// if state is undefined, set it to null (redux won't let us return undefined)
export default function(state = null, action) {

  // if you do care about the action
  switch(action.type) {
    case BOOK_SELECTED:
      return action.payload;
    default:
      return state
  }

  // if you don't care about current action, pass state on through
  // return state
}
