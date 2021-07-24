import './SquareDraw.css'

const SquareDraw = props => {
    let setStyle = null;
    const divClasses = ['main'];
    // let component = null;

    if (props.close) {
    divClasses.push('close');
    }

    if (props.find) {
        divClasses.push('find');
        // component = (
        //     <span>&#9775;</span>
        // )
    }

    return (
        <p className={divClasses.join(' ')} style={setStyle} onClick={props.onOpenDiv}>
            {/*{component}*/}
            &#9775;
        </p>
    );
}

export default SquareDraw;