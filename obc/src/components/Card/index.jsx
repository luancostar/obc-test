import poster from "./../../assets/poster.jpg"

export default function Card() {
    return (

    <div 
    style={{
        display: "flex",
        justifyContent: "center",
    }}>
    <div className="main">
     <div className="container">
        <div className="contents">
            <div className="content--1">
             <img className="img--content"  src={poster} />
            </div>
            <div className="content--2">
                <h2>Pôster: Alien (1979)</h2>
                <p>In deep space, the crew of the commercial starship Nostromo is awakened from their cryo-sleep capsules halfway through their journey home to investigate a distress call from an alien vessel. The terror begins when the crew encounters a nest of eggs inside the alien ship. An organism from inside an egg leaps out and attaches itself to one of the crew, causing him to fall into a coma.</p>
                <button>Comprar agora</button>
            </div>
        </div>
     </div>
    </div>
    </div>
    )
}