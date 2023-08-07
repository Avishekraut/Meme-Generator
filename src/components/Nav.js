import logo from '../images/Troll Face.png'

export default function Nav() {
    return(
        <nav>
            <img className="logo" src={logo}></img>
            <p>Meme Generator</p>
        </nav>
    )
}