import React from "react";
import Categories from "../Categories/Categories.component";
import Featured from "../Featured/Featured.component";
import Slider from "../Slider/Slider";
function Homepage() {
    return (
        <div className="homepage">
            <Slider/>
            <Categories/>
            <Featured/>
        </div>
    )
}

export default Homepage;