import { useSingleProduct } from "../../utils/hooks/useSingleProduct";
import { useParams } from "react-router-dom";
import ProductGallery from "../ProductGallery/ProductGallery.component";
import ProductInfo from "../ProductInfo/ProductInfo.component";

function ProductDetail() {
  const { productId } = useParams();
  const { data: product, isLoading } = useSingleProduct(productId);

  return (
    <div className="product-detail">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-detail-container">
          <ProductGallery {...product.results[0].data} />
          <ProductInfo {...product.results[0]} />
        </div>
      )}
    </div>
  );
}
export default ProductDetail;
