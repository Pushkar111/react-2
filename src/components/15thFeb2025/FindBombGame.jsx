import React, { useMemo, useState } from "react";

export const FindBombGame = () => {
    const [clickedTiles, setClickedTiles] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [message, setMessage] = useState("Find The Bomb");

    const gridSize = 3;
    const totalTiles = gridSize * gridSize;

    // Bomb position...
    const bombPosition = useMemo(() => Math.floor(Math.random() * totalTiles), [totalTiles]);

    const handleClick = (index) => {
        if (index === bombPosition) {
            setMessage("💣 Boom! Bomb found...");
            setGameOver(true);
        } else {
            setMessage("Searching...");
            setClickedTiles([...clickedTiles, index]);
        }
    };

    const resetGame = () => {
        setClickedTiles([]);
        setGameOver(false);
        setMessage("Find The Bomb");
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>{message}</h1>
            <div style={styles.grid}>
                {Array.from({ length: totalTiles }).map((_, index) => {
                    const isClicked = clickedTiles.includes(index);
                    const isBomb = gameOver && index === bombPosition;

                    return (
                        <div
                            key={index}
                            onClick={() => !gameOver && handleClick(index)}
                            style={{
                                ...styles.tile,
                                backgroundColor: isClicked ? "#ddd" : "#fff",
                                transform: isClicked ? "scale(0.95)" : "scale(1)",
                                transition: "transform 0.2s, background-color 0.2s",
                                cursor: gameOver ? "not-allowed" : "pointer",
                            }}
                        >
                            {isBomb ? "💣" : ""}
                        </div>
                    );
                })}
            </div>
            {gameOver && (
                <button style={styles.button} onClick={resetGame}>
                    Play Again
                </button>
            )}
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        fontFamily: "'Arial', sans-serif",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "0 auto",
    },
    title: {
        fontSize: "24px",
        color: "#333",
        marginBottom: "20px",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 50px)",
        gap: "10px",
        justifyContent: "center",
        marginBottom: "20px",
    },
    tile: {
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "20px",
        userSelect: "none",
    },
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        color: "#fff",
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.2s",
    },
};

export default FindBombGame;