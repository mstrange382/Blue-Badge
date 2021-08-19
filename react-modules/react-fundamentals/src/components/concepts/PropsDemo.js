import React, {useState} from 'react';
import PropTypes from 'prop-types';


const PropsDemo = () => {
    const [color, setcolor]= useState ('white')
    const [backgroundColor, setBackgroundColor] = useState ('purple')
    const [borderRadius, setBorderRadius] = useState ('5px')
    const [borderStyle, setBorderStyle] = useState ('dashed')
    const [display, setDisplay] = useState ('inline-block')
    const [width, setWidth] = useState ('350px')
    const [textAlign, setTextAlign] = useState ('center')
    let styles = {
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display:display,
        width: width,
        textAlign: textAlign,
    }
    const toggleColor = () => {
        color === 'white' ? setcolor('green') : setcolor ('navy');
    }
    const toggleRadius = () =>{
        borderRadius === '5px' ? setBorderRadius ('10px') : setBorderRadius ('15px');
    }

    const toggleBackground = () => {
        backgroundColor === 'purple' ? setBackgroundColor ('yellow') : setBackgroundColor ('orange');
    }

    const toggleStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle ('solid') : setBorderStyle ('double')
    }
    return(
        <div className="main">
            <div className="mainDiv">
                <div style ={styles}>
                <FunctionalComponent string ="will this display?" function = {toggleRadius} selectedStyle ={borderRadius} />
                <FunctionalComponent string ="hey! it did display!" function = {toggleColor} selectedStyle={color}/>
                <FunctionalComponent string ="props do things" function = { toggleStyle} selectedStyle={borderStyle} />
                <FunctionalComponent string ="don't they?" function = {toggleBackground} selectedStyle={backgroundColor} />
                </div>
            </div>
        </div>
    )
}

export default PropsDemo;

const FunctionalComponent = (props) =>{
    return (
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!!</button>
            <TinyComponent selectedStyle={props.selectedStyle} />
        </div>
    )
}

const TinyComponent = (props) => {
    return(
        <div>
            <p>The current style is : {props.selectedStyle}</p>
        </div>
    )
}

FunctionalComponent.defaultProps = {
    string:'This is wild!',
    function: () => console.log('Can I see this in my dev tools?'),
    selectedStyle: 'what style??'
};

FunctionalComponent.propTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
}

