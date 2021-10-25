const notificationAtStart = {
  message: "Vote or add a new anecdote",
  // anecdote: null
}

const notificationReducer = (state = notificationAtStart, action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case 'NONE':
      return { message: '' }
    case 'VOTED':
      return { message: `You voted for '${action.content}'` }
    case 'CREATE_ANECDOTE':
      return { message: 'New anecdote created'}
    default:
      return state
  }
}

export const noNotification = () => {
  return {
    type: 'NONE'
  }
}

export const voteNotification = (content) => {
  // console.log('voteNotification - anecdote: ', anecdote)
  return {
    type: 'VOTED',
    content: content
  }
}

export const createAnecdoteNotification = () => {
  return {
    type: 'CREATE_ANECDOTE'
  }
}

export default notificationReducer