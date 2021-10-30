const notificationReducer = (state = '', action) => {

  switch (action.type) {
    case 'NONE':
      return { message: '' }
    case 'SET':
      return { 
        message: action.data.message,
      }
    default:
      return state
  }
}

let timeoutID
export const clearNotification = () => {
  return {
    type: 'NONE' 
  }
}

export const setNotification = (message, timeout) => {
  return async dispatch => {
    clearTimeout(timeoutID)
    dispatch({
      type: 'SET',
      data: { message }
    })
    timeoutID = setTimeout(() => dispatch(clearNotification()), timeout)
  }
}

export default notificationReducer