import './App.css';
import {useState} from "react";
import Square from "./Components/Square/Square";
import Counter from "./Components/Counter/Counter";

const App = () => {
        const [squares, setSquares] = useState([]);
        const [block, setBlock] = useState(0);
        const [count, setCount] = useState(0);
        const [win, setWin] = useState(false);
        let final = null;

        const newGame = () => {
            setBlock(Math.floor(Math.random() * (35 + 1)));
            setWin(false);
            const newSquares = [];
            for (let i = 0; i < 36; i++) {
                newSquares.push({
                    id: i,
                    find: false,
                    close: true,
                });
            }
            setSquares(newSquares);
        };

        const openDiv = id => {
            if (!win) {
                setCount(count + 1);
                setSquares(squares.map(div => {
                    if (div.id === id) {
                        if (block === id) {
                            setWin(true);
                            return {
                                ...div,
                                find: true,
                                close: false,
                            };
                        }
                        return {
                            ...div,
                            close: false,
                        };
                    }
                    return div;
                }));
            }
        };

        const squaresComponents = (
            <Square
                squares={squares}
                onOpenDiv={openDiv}
            />

        );

        if (squares.length === 0) {
            newGame();
        }

        if (win) {
            final = "You are Win!!";
        }

        return (
            <div className="App" style={{textAlign: 'center', width: '192px'}}>
                <p>
                    <button onClick={newGame}>Reset</button>
                </p>
                {squaresComponents}

                <Counter tries={count}/>
                <p>{final}</p>
            </div>
        )
    }
;

export default App;
