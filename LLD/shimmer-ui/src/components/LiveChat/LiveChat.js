import React from 'react'
import VideoStream from './VideoStream'
import ChatWindow from './ChatWindow'

const LiveChat = () => {
  return (
    <div style={{ display: 'flex' }}>
        <VideoStream />
        <ChatWindow />
    </div>
  )
}

export default LiveChat