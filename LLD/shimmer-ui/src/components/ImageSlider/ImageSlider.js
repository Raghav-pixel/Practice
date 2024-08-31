import React, { useState, useEffect, useCallback } from 'react'

const data = [
    "https://img.freepik.com/free-photo/snowy-mountain-peak-starry-galaxy-majesty-generative-ai_188544-9650.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724976000&semt=ais_hybrid",
    "https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg",
    "https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgaTspKHTvZNIYz97ZfrQk4aEdxRAj-lFEw&s",
    "https://images5.alphacoders.com/110/thumb-1920-1105001.jpg"
]

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const handleRightClick = useCallback(() => {
    if(index === data.length-1) {
      setIndex(0);
      return;
    }
    setIndex((index) => index+1);
  }, [index])

  useEffect(() => {
    let timer = setInterval(() => {
      handleRightClick()
    }, 1000);

    return () => clearInterval(timer);
  }, [handleRightClick])

  const handleLeftClick = () => {
    if(index === 0) {
      setIndex(4);
      return;
    }
    setIndex((index) => index-1);
  }


  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p onClick={handleLeftClick}>Left</p>
          {
              data.length>0 && data.map((image, idx) => (
                  index === idx && (
                  <img 
                    key={idx}
                    width={"300px"}
                    height={"300px"}
                    src={image}
                    alt={`image-${idx}`}
                    style={{ margin: "0px 20px" }}
                  />)
              ))
          }
        <p onClick={handleRightClick}>Right</p>
      </div>
    </div>
  )
}

export default ImageSlider