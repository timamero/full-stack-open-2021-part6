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
      return { message: `You voted for '${action.anecdote}'` }
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

export const voteNotification = (anecdote) => {
  // console.log('voteNotification - anecdote: ', anecdote)
  return {
    type: 'VOTED',
    anecdote: anecdote
  }
}

export const createAnecdoteNotification = () => {
  return {
    type: 'CREATE_ANECDOTE'
  }
}

export default notificationReducer