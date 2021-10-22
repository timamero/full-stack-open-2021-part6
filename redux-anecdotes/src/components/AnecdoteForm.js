import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { createAnecdoteNotification } from '../reducers/notificationReducer';
import anecdoteServices from '../services/anecdotes';

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  
  const addAnecdote = async (event) => {
    event.preventDefault()
    const newContent = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('newAnecdote', newContent)
    const newAnecdote = await anecdoteServices.createNew(newContent)
    dispatch(createAnecdote(newAnecdote))
    dispatch(createAnecdoteNotification())
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm