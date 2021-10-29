import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const notification = props.notification
  const message = notification.message
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  console.log('message', message)

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

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification