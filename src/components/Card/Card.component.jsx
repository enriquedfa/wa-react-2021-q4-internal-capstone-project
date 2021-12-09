import { Link } from "react-router-dom";

function Card({ id, data }) {
  return (
    <div className="category" key={id}>
      <Link to={`/products?category=${id}`}>
        <img
          className="category-image"
          src={data.main_image.url}
          alt={data.main_image.alt}
        />
        <h3>{data.name}</h3>
      </Link>
    </div>
  );
}

export default Card;
