/*  /reducers/posts.js
*/
import C from '../store/constants'

const posts = (state = {}, action) => {
  switch (action.type) {
    case C.INITIALIZE:

      return {
        loading: !state.loading
      }

    default:
      return state
  }
}

export default posts
