import React from 'react';
import ImageSlider from "../../utilities/ImageSlider";

const Intro = props => {
    return (
        <div>
            <ImageSlider/>

            <div className={'container'}>
                <span className={'intro-text-big'}>"Basa Bari"</span>
                <span className={'intro-text'}> is an Android Appliction to find rental home across the cities of Bangladesh.</span>

            </div>
        </div>
    );
};


export default Intro;