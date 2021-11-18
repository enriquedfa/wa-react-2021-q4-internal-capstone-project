import React from "react";
import sliders  from "./featured-banners.json"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';

function Slider() {
    return (
        <Carousel showThumbs={true} showStatus={false} showIndicators={true}>
            {sliders.results.map((slider) => {
                return (
                    <div key={slider.id}>
                        <img src={slider.data.main_image.url} alt={slider.data.main_image.alt} />
                        <p className="legend">{slider.data.title}</p>
                    </div>
                )
            })}
        </Carousel>
    )
}

export default Slider;