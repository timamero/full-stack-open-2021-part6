const anecdoteReducer = (state = [], action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      const anecdote = state.find(anecdote => anecdote.id === action.data.id)
      const updatedAnecdote = {
        ...anecdote,
        votes: ++anecdote.votes
      }
      return state.map(anecdote => anecdote.id !== updatedAnecdote ? anecdote : updatedAnecdote)
    case 'NEW_ANECDOTE':
      // console.log('action = NEW_ANECDOTE')
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
      // console.log('action - INIT_ANECDOTES')
      return action.data
    default:
      return state
  }
}

export const voteOnAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data
  }
}

export const initizalizeAnecdotes = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    data: data
  }
}

export default anecdoteReducer