import React, {useState} from 'react';
import './SquareDraw.css'

const SquareDraw = props => {
    const divClasses = ['main'];
    let findComponent = null;

    if (props.close) {
    divClasses.push('close');
    }

    if (props.find) {
        findComponent = (
            <p className="spanCenter">&#9775;</p>
        )
    }

    return (
        <div className={divClasses.join(' ')} onClick={props.onOpenDiv}>
            {findComponent}
        </div>
    );
}

export default SquareDraw;