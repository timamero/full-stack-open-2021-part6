const initialMessage = "You voted"

const notificationReducer = (state = initialMessage, action) => {
  console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case 'SUCCESS':
      console.log('success')
      return state
    default:
      return state
  }
}

export const successNotification = () => {
  return {
    type: 'SUCCESS',
    message: 'You added ...'
  }
}

export default notificationReducer