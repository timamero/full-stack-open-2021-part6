import anecdoteServices from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      // const anecdote = state.find(anecdote => anecdote.id === action.data.id)
      // const updatedAnecdote = {
      //   ...anecdote,
      //   votes: ++anecdote.votes
      // }
      console.log('action.data in VOTE - ', action.data)
      return state.map(anecdote => anecdote.id !== action.data.id ? anecdote : action.data)
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

export const voteOnAnecdote = (object) => {
  return async dispatch => {
    await anecdoteServices.update(object)
    dispatch({
      type: 'VOTE',
      data: object
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteServices.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: anecdote
    })
  }
}

export const initizalizeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteServices.getAll()
    console.log('init-anecdotes', anecdotes)
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    }) 
  }
}

export default anecdoteReducer