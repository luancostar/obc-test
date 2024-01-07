

export default function Card( {title, paragraph, poster}) {
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
                <h2>{title}</h2>
                <p>{paragraph}</p>
                <button>Comprar agora</button>
            </div>
        </div>
     </div>
    </div>
    </div>
    )
}