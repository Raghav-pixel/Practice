import React, { useState, useEffect } from 'react'
import './SearchUi.css'
import SearchSvg from './search.svg'

const SearchUI = () => {
    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [isSearchResultVisible, setIsSearchResultVisible] = useState(false);
    const [cache, setCache] = useState({});

    useEffect(() => {
        let timeout = setTimeout(() => {
            fetchData();
        }, 2000);

        return () => clearTimeout(timeout);
    }, [searchText]);

    const fetchData = async() => {
        try {
            if(cache[searchText]) {
                setSearchResult(cache[searchText]);
                return;
            } else {
                const response = await fetch(`https://www.google.com/complete/search?client=firefox&q=${searchText}`);
                const result = await response.json();
                cache[searchText] = result[1];
                setSearchResult(result[1]);
            }
        } catch(err) {
            console.log(err);
        }
    } 
  return (
    <div className='search-ctr'>
        <div className='search-input-ctr'>
            <input 
                className='search-input' 
                type='text' 
                placeholder='Search Google or type a URL' 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onFocus={() => setIsSearchResultVisible(true)}
                onBlur={() => setIsSearchResultVisible(false)}
            />
            <img className='search-img' src={SearchSvg} alt='search' />
            {searchResult.length>0 && isSearchResultVisible && <ul className='search-sugg-ctr' style={{ width: '100%', backgroundColor: 'white' }}>
                {
                    searchResult.map((result, idx) => (
                        <li key={idx}>{result}</li>
                    ))
                }
            </ul>}
            {/* <div className='search-sugg-ctr'>
            </div> */}
        </div>
    </div>
  )
}

export default SearchUI