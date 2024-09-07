import React from 'react'

const ChatMessage = ({ name, photo, message }) => {
  return (
    <div style={{ display: 'flex', padding: '6px' }}>
        <img style={{ height: '20px', width: '20px', borderRadius: '50%', margin: '4px' }} src={photo} alt={name} />
        <p style={{ margin: 0 }}>
            <span style={{ fontWeight: 'bold' }}>{name} - </span>
            <span>{message}</span>
        </p>
    </div>
  )
}

export default ChatMessage