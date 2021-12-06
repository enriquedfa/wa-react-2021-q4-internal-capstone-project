import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="category" key={props.id}>
      <Link to={`/products?category=${props.id}`}>
        <img
          className="category-image"
          src={props.data.main_image.url}
          alt={props.data.main_image.alt}
        />
        <h3>{props.data.name}</h3>
      </Link>
    </div>
  );
}

export default Card;
