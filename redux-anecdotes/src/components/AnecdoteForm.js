import React from 'react';
import { connect } from 'react-redux'
// import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {
  // const dispatch = useDispatch()
  
  const addAnecdote = async (event) => {
    event.preventDefault()
    const newContent = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(newContent)
    // dispatch(createAnecdote(newContent))
    props.setNotification('Created a new anecdote', 5000)
    // dispatch(setNotification('Created a new anecdote', 5000))
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

const mapDispatchToProps = {
  createAnecdote,
  setNotification
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm