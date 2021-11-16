import React from "react";
import Categories from "./Categories";
import Featured from "./Featured";
import Slider from "./Slider";
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