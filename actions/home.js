import C from '../store/constants'

export default {
  initialize: function (id) {
    return async dispatch => {
      dispatch({
        type: C.INITIALIZE
      })
    }
  }
}
