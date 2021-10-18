import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { noNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector(store => store.notification)
  const message = notification.message
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  useEffect(() => {
    if (notification.message) {
      setTimeout(() => dispatch(noNotification()), 5000)
    }
  })

  return (
    <div>
    {message &&
      <div style={style}>
        {notification.message}
      </div>
    }      
    </div>
      

  )
}

export default Notification