const notificationReducer = (state = '', action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

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

export const setNotification = (message) => {
  return {
    type: 'SET',
    data: { message }
  }
}

export default notificationReducer