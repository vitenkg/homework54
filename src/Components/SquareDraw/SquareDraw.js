import React from 'react';
import './SquareDraw.css'

const SquareDraw = props => {
    const divClasses = ['main'];
    let smile = '';

    if (props.close) {
    divClasses.push('close');
    }

    if (props.find) {
        smile = ['&#9775;'];
    }

    return (
        <div className={divClasses.join(' ')} onClick={props.onOpenDiv}>
            {smile}
        </div>
    );
}

export default SquareDraw;