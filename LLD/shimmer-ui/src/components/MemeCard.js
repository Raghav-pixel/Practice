import React from 'react'

const MemeCard = ({ meme }) => {
    console.log(meme);
    const { url, title, author } = meme;
  return (
    <div className='meme-ctr'>
        <img className='meme-img' src={url} alt='meme-img' />
        <p>{author}</p>
    </div>
  )
}

export default MemeCard