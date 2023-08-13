import { useState } from 'react';
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText : "",
    bottomText : "",
    randomImage : "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemeImages, setAllMemeImages] = useState(memesData)
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme(prevMeme => {
      return {...prevMeme, randomImage : memesArray[randomNumber].url}
    })
  }
  return (
    <div className="meme-container">
      <div className="form">
        <input type="text" placeholder="Top Text" className="form--input" />
        <input type="text" placeholder="Bottom Text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className='imgContainer'>
      <img className= "memeImage" src={meme.randomImage}></img>
      </div>
    </div>
  );
}
