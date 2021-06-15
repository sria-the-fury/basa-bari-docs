import React from 'react';
import ImageSlider from "../../utilities/ImageSlider";

const Intro = props => {
    return (
        <div>
            <ImageSlider/>

            <div className={'container'} style={{marginTop: '15px', marginBottom: '15px', textAlign: 'justify'}}>
                <span className={'intro-text-big'}>"Basa Bari"</span>
                <span className={'intro-text'}> is an Android Application to find a rental home across the cities of Bangladesh. The vision to make this app is to find the rental home easily around the people. Generally, people suffer so much for finding a good rental home, and also roaming around every lane of the city for searching for a home needs more time. Valuable time should not be wasted. That's why Basa Bari will help you to save your time for finding a good rental home.
                </span>

            </div>
        </div>
    );
};


export default Intro;