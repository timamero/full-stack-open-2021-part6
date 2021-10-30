import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteOnAnecdote, initizalizeAnecdotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const filter = useSelector(state => state.filter.value)
  const anecdotes = useSelector(state => state.anecdotes.filter(anecdote => anecdote.content.includes(filter)))
  const dispatch = useDispatch()
  // console.log('AnecdoteList - anecdotes', anecdotes)

  useEffect(() => {
    dispatch(initizalizeAnecdotes())
  }, [dispatch])

  const vote = (id) => {
    const anecdote = anecdotes.find(anecdote => anecdote.id === id)
    const updatedAnecdote = {
      ...anecdote,
      votes: ++anecdote.votes
    }
    dispatch(voteOnAnecdote(updatedAnecdote))
    dispatch(setNotification(`You voted for ${updatedAnecdote.content}`, 5000))
    // dispatch(clearNotification())
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

  anecdotes.sort(sortByVote)

  return (
    <div>
      {anecdotes.map(anecdote => {
        return (
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>)
      })}
    </div>
  )
}

export default AnecdoteList