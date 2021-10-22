const filterAtStart = {
  value: ''
}

const filterReducer = (state = filterAtStart, action) => {
  // console.log('filterReducer state', state)
  // console.log('filterReducer action', action)
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {value: action.value}
    default:
      return {value: state.value}
  }
}

export const changeFilter = (value) => {
  return {
    type: 'CHANGE_FILTER',
    value: value
  }
}

export default filterReducer