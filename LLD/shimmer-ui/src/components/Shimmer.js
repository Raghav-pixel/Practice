import React from 'react'

const Shimmer = () => {
  return Array(20).fill(0).map((s, i) => (
    <div className='meme-ctr'>
        <div className='meme-img-dummy'></div>
    </div>
  ))
}

export default Shimmer