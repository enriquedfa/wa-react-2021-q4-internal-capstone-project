function ProductInfo(props) {
  return (
    <div className="product-detail-info">
      <h1>{props.data.name}</h1>
      <p className="product-detail-category">{props.data.category.slug}</p>
      <p className="product-detail-sku">SKU: {props.data.sku}</p>
      <p className="product-detail-price">${props.data.price}</p>
      <p className="product-detail-description">
        {props.data.description[0].text}
      </p>
      <div className="product-details-tags">
        Tags:
        {props.tags.map((item, index) => (
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
          {props.data.specs.map((item, index) => (
            <tr key={index}>
              <td>{item.spec_name}</td>
              <td>{item.spec_value}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default ProductInfo;
