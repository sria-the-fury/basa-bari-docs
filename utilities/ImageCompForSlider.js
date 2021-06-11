import React from 'react';

const ImageCompForSlider = ({src}) => {
    let ImageStyles = {
        width: 100+'%',
        height: 'auto',
        minHeight: '300px'

    }
    return (
        <img src={src} alt='slide-item' style={ImageStyles}/>
    );
}

export default ImageCompForSlider;