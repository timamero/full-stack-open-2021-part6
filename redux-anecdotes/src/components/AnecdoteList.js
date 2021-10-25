import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteOnAnecdote, initizalizeAnecdotes } from '../reducers/anecdoteReducer'
import { voteNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const filter = useSelector(state => state.filter.value)
  const anecdotes = useSelector(state => state.anecdotes.filter(anecdote => anecdote.content.includes(filter)))
  const dispatch = useDispatch()
  console.log('AnecdoteList - anecdotes', anecdotes)

  useEffect(() => {
    dispatch(initizalizeAnecdotes())
  }, [dispatch])

  const vote = (id) => {
    const anecdote = anecdotes.find(anecdote => anecdote.id === id)
    const updatedAnecdote = {
      ...anecdote,
      votes: ++anecdote.votes
    }
    // console.log('updatedAnecdote', updatedAnecdote)
    dispatch(voteOnAnecdote(updatedAnecdote))
    dispatch(voteNotification(updatedAnecdote.content))
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

  let sortedAnecdotes = anecdotes.sort(sortByVote)
  
  // console.log('sortedAnecdotes', sortedAnecdotes)

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