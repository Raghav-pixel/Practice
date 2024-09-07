import React from 'react'

const VideoStream = () => {
  return (
    <div style={{ margin: '5px' }}>
        <iframe 
            width="1200" 
            height="600" 
            src="https://www.youtube.com/embed/Lt6I69Wf92o?si=AQtoeoPN6sJsq_yQ" 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
        </iframe>
    </div>
  )
}

export default VideoStream