import React, {useEffect, useState} from 'react';

import ImageCompForSlider from "./ImageCompForSlider";

const ImageSlider = () => {
    let SlideItems = [
        <ImageCompForSlider src={'/assets/carousel-images/image-1.jpg'}/>,
        <ImageCompForSlider src={'/assets/carousel-images/image-2.jpg'}/>,
        <ImageCompForSlider src={'/assets/carousel-images/image-3.jpg'}/>,
        <ImageCompForSlider src={'/assets/carousel-images/image-4.jpg'}/>,
    ];

    const [x, setX] = useState(0);
    useEffect(() => {
        let interVal = setInterval(() => {
            x === 0 ? setX(-100*(SlideItems.length-1)) : setX(x+100)

        },4000);
        return () => clearInterval(interVal);

    });


    return (
        <div className='slider-custom'>
            {
                SlideItems.map((item, index) => {
                    return(
                        <div key={index} className='slide' style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }

            <div className='text-container'>
                <div className='heading-center'>
                    <div className='container'>
                        <section id='home' className='section'>
                          <span className="brand-name">
                              <h2 className='white-text center-align brand-name-only' style={{marginTop:'5em', textAlign: 'center', fontWeight: "bold"}} >Basa Bari</h2>
                              <h5 className='white-text center-align brand-full-name' style={{textAlign: 'center'}}>FIND YOUR HOME - Across the Cities in Bangladesh.</h5>
                          </span>

                        </section>

                    </div>

                </div>


            </div>


        </div>
    );
}

export default ImageSlider;