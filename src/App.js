import './App.css';
import {useState} from "react";
import Square from "./Components/Square/Square";
import Counter from "./Components/Counter/Counter";

const App = () => {
    const [squares, setSquares] = useState([]);
    const [block, setBlock] = useState(Math.floor(Math.random() * (35 + 1)));
    const [count, setCount] = useState(0);

    const newGame = () => {
        setBlock(Math.floor(Math.random() * (35 + 1)));
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
        console.log('block', block);
        console.log('id', id);
        setCount(count + 1);
        setSquares(squares.map(div => {
            if (div.id === id) {
                if (block === id) {
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
    };

const squaresComponents = (
    <Square
        squares={squares}
        onOpenDiv={openDiv}
    />

);

return (
    <div className="App" style={{textAlign: 'center', width: '192px'}}>
        <p>
            <button onClick={newGame}>New Game</button>
        </p>
        {squaresComponents}

        <Counter tries={count}/>
        {block}
        {/*{squares.find}*/}
    </div>
)
}
;

export default App;
