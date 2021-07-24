import './App.css';
import {useState} from "react";
import Square from "./Components/Square/Square";

const App = () => {
    const [squares, setSquares] = useState([]);

    const newGame = () => {
        const newSquares = [];
        for (let i = 0; i < 36; i++) {
            newSquares.push({
                id: i,
                find: true,
                close: true,
            });
        }
        setSquares(newSquares);
    };

    const openDiv = id => {
        setSquares(squares.map(div => {
            if (div.id === id) {
                return {
                    ...div,
                    close: false,
                };
            }
            return div;
        }));
    };

    const squaresComponents = (
        <Square
            squares={squares}
            onOpenDiv={openDiv}
        />

    );

    return (
        <div className="App" style={{textAlign: 'center', width: '192px'}}>
            {squaresComponents}

            <p>
                <button onClick={newGame}>New Game</button>
            </p>
        </div>
    )
};

export default App;
