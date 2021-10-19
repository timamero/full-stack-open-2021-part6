import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeFilter } from '../reducers/filterReducer'
// import { filterAnecdotes } from '../reducers/anecdoteReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.value)
  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input value={filter} onChange={handleChange} />
    </div>
  )
}

export default Filter