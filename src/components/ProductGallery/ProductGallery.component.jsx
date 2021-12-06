import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
// Import Swiper React components
import SwiperCore, { Navigation, Thumbs } from "swiper";
// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

function ProductGallery(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="product-detail-image">
      <Swiper
        slidesPerView={1}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="swiper-selected-image"
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <img key={index} src={item.image.url} alt={item.image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="swiper-thumbnails"
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <img key={index} src={item.image.url} alt={item.image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductGallery;
