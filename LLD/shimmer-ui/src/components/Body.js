import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';

const Body = () => {
    const [memes, setMemes] = useState(null);

    useEffect(() => {
        fetchMemes();
    }, []);

    const fetchMemes = async() => {
        try {
            const data = await fetch('https://meme-api.com/gimme/20');
            const json = await data.json();
            setMemes(json.memes);
        } catch(err) {
            console.log(err);
        }
    }
  return (
    <div className='meme-body-ctr'>
        {!memes ? <Shimmer /> : memes.map((meme, i) => <MemeCard meme={meme} />)}
    </div>
  )
}

export default Body