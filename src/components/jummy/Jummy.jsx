import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './jummy.css';

const Jummy = ({addProducts}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.products);
      });
  }, []);


  return (
    <div className="products container">
      {items.map((item) => {
        return (
          <div className="product" key={item.id}>
            <img src={item.thumbnail} alt="" />
            <h2>{item.title}</h2>
            <button onClick={() =>addProducts(item)}>Add To Cart</button>
           <Link to = {`/singleJummy/${item.id}`}>
           <button>More Details</button>
           </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Jummy;
