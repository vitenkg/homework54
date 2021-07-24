import React from 'react';
import SquareDraw from "../SquareDraw/SquareDraw";

const Square = props => {
    return props.squares.map(cell => (
        <SquareDraw
            key={cell.id}
            id={cell.id}
            close={cell.close}
            find={cell.find}
            onOpenDiv={()=> props.onOpenDiv(cell.id)}
        />
    ));
};

export default Square;