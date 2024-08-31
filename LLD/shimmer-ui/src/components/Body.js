import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';

const Body = () => {
    const [memes, setMemes] = useState([]);
    const [showShimmer, setShowShimmer] = useState(false);

    useEffect(() => {
        fetchMemes();

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        // window.scrollY -> height of window that is scrolled so far
        // window.innerHeight -> height of the window that is visible
        // document.body.scrollHeight -> total height of body that is scrollable
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            fetchMemes();
        }
    }

    const fetchMemes = async() => {
        try {
            setShowShimmer(true);
            const data = await fetch('https://meme-api.com/gimme/20');
            const json = await data.json();
            console.log(json.memes, "[memes]");
            setShowShimmer(false);
            setMemes((memes) => [...memes, ...json.memes]);
        } catch(err) {
            console.log(err);
        }
    }
  return (
    <div className='meme-body-ctr'>
        {memes.map((meme, i) => <MemeCard key={i} meme={meme} />)}
        {showShimmer && <Shimmer />}
    </div>
  )
}

export default Body