import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  console.log('getAll request')
  const response = await axios.get(baseUrl)
  console.log('response', response)
  return response.data
}

const anecdoteServices = {
  getAll
}

export default anecdoteServices