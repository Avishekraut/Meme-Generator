import { useState } from 'react';
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("")
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url)
  }
  return (
    <div className="meme-container">
      <div className="form">
        <input type="text" placeholder="Top Text" className="form--input" />
        <input type="text" placeholder="Bottom Text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className='imgContainer'>
      <img className= "memeImage" src={memeImage}></img>
      </div>
    </div>
  );
}
