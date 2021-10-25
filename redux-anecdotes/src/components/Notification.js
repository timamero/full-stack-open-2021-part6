import React from 'react'
import { useSelector } from 'react-redux'
// import { clearNotification } from '../reducers/notificationReducer'

const Notification = () => {
  // const dispatch = useDispatch()
  const notification = useSelector(store => store.notification)
  const message = notification.message
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  // useEffect(() => {
  //   if (notification.message) {
  //     setTimeout(() => dispatch(clearNotification()), 5000)
  //   }
  // })

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