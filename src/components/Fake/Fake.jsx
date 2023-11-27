import { useEffect, useState } from "react";
import "./fake.css";
import { Link } from "react-router-dom";

const Fake = ({addProducts}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      }, []);
  });

  return (
    <div className="products container">
      {products.map((product) => {
        return <div className="product" key={product.id}>
            <img src={product.image} alt="" />
            <h2>{product.title.slice(0,20)}</h2>
            <button onClick={() =>addProducts(product)}>Add To Cart</button>
            <Link to = {`singleFake/${product.id}`}>
            <button className="details">More Details</button>
            </Link>

        </div>;
      })}
    </div>
  );
};

export default Fake;
