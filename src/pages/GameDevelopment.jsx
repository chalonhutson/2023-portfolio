import "../assets/css/GameDevelopment.css"

export default function GameDevelopment() {
    const gamesArr = [
        {
            title: "Game Jam Simulator 3000",
            description: "A game about making games in a game jam.",
            downloadLink: "https://hipstergw.itch.io/game-jam-simulator-3000",
            videoLink: "https://www.youtube.com/embed/F0o95PIW-Bk"
        },
        {
            title: "Dreambound",
            description: "It's good to dream, but the real world needs your help too.",
            downloadLink: "https://hipstergw.itch.io/dreambound",
            videoLink: "https://www.youtube.com/embed/qfqYk0Sn-gI"
        },
        {
            title: "Button Click Simulator 5000",
            description: "You are in control of two brave souls. One in a space station, one in a deep sea station. To rescue them, you must CLICK THE BUTTONS!",
            downloadLink: "https://hipstergw.itch.io/button-click-simulator-5000",
            videoLink: "https://www.youtube.com/embed/SXgqHQdtejE"
        }
    ]

    return (
        <div className="componentContainer">

            <div className="mainContainer">
                <h1>Game Dev</h1>
                <h2>Check out some of my Unreal Engine Projects!</h2>
                <h2>All games part of game jams.</h2>
                <div className="gameContainer">
                    {gamesArr.map(game => {
                        return (
                            <div className="gameContainer">
                                <div className="gameTitleContainer">
                                    <h3>{game.title}</h3>
                                    <a href="https://www.artstation.com/hipstergw" target="_blank" rel="noopener noreferrer">
                                        <button className="project-button ms-3">Download & Play</button>
                                    </a>
                                </div>
                                <iframe className="ytEmbed" src={game.videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>)
}