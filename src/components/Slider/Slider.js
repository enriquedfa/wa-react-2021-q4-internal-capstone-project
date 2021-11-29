import React from "react";
// import sliders from "../../mocks/featured-banners.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners";

function Slider() {
  // const { results } = sliders;
  const { data, isLoading } = useFeaturedBanners();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={50}
    >
      {data.results.map((slider) => {
        return (
          <div key={slider.id}>
            <img
              height="50%"
              src={slider.data.main_image.url}
              alt={slider.data.main_image.alt}
            />
            <p className="legend">{slider.data.title}</p>
          </div>
        );
      })}
    </Carousel>
  );
}

export default Slider;
