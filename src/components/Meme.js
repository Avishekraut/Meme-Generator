export default function Meme() {
  return (
    <div className="meme-container">
      <form className="form">
        <input type="text" placeholder="Top Text" className="form--input" />
        <input type="text" placeholder="Bottom Text" className="form--input" />
        <button className="form--button">Get a new meme image 🖼</button>
      </form>
    </div>
  );
}
