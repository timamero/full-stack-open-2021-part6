const notificationReducer = (state = '', action) => {

  switch (action.type) {
    case 'NONE':
      return { message: '' }
    case 'SET':
      return { message: action.data.message }
    default:
      return state
  }
}

export const clearNotification = () => {
  return {
    type: 'NONE'
  }
}

export const setNotification = (message, timeout) => {
  return async dispatch => {
    dispatch({
      type: 'SET',
      data: { message }
    })
    setTimeout(() => dispatch(clearNotification()), timeout)
  }
  
}

export default notificationReducer