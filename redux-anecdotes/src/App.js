import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteOnAnecdote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  
  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteOnAnecdote(id))
  }

  const sortByVote = (a, b) => {
    if (a.votes > b.votes) {
      return -1
    }

    if (a.votes < b.votes) {
      return 1
    }

    return 0;
  }

  const sortedAnecdotes = anecdotes.sort(sortByVote)
  console.log('sortedAnecdotes', sortedAnecdotes)

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <AnecdoteForm />
    </div>
  )
}

export default App