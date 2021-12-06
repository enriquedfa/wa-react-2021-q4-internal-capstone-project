import { useSingleProduct } from "../../utils/hooks/useSingleProduct";
import { useState } from "react";
import { useParams } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper";
// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

function ProductDetail() {
  const { productId } = useParams();
  const { data: product, isLoading } = useSingleProduct(productId);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  console.log("data", product);
  console.log("isLoading", isLoading);
  return (
    <div className="product-detail">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-detail-container">
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
              {product.results[0].data.images.map((item, index) => (
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
              {product.results[0].data.images.map((item, index) => (
                <SwiperSlide key={index}>
                  <img key={index} src={item.image.url} alt={item.image.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="product-detail-info">
            <h1>{product.results[0].data.name}</h1>
            <p className="product-detail-category">
              {product.results[0].data.category.slug}
            </p>
            <p className="product-detail-sku">
              SKU: {product.results[0].data.sku}
            </p>
            <p className="product-detail-price">
              ${product.results[0].data.price}
            </p>
            <p className="product-detail-description">
              {product.results[0].data.description[0].text}
            </p>
            <div className="product-details-tags">
              Tags:
              {product.results[0].tags.map((item, index) => (
                <label key={index} className="product-detail-tag">
                  {item}
                </label>
              ))}
            </div>
            <div className="product-detail-add-to-cart">
              <select className="product-detail-quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button className="product-detail-add-to-cart-button">
                Add to Cart
              </button>
            </div>
            <div className="product-detail-specifications">
              <h3>Specifications</h3>
              <table className="product-detail-specifications-table">
                {product.results[0].data.specs.map((item, index) => (
                  <tr key={index}>
                    <td>{item.spec_name}</td>
                    <td>{item.spec_value}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductDetail;
