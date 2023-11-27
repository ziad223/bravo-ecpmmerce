import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import './fake.css';

const SingleFake = ({addProducts}) => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      }, []);
  });

  return (
    <div className="single-fake">
      <img src={product.image} alt="" />
      <div className="single-fake-details">
      <h2>{product.category}</h2>
        <h3>{product.title}</h3>
        <div className="icons">
          <FaStar className="star-icon" />
          <FaStar className="star-icon" />
          <FaStar className="star-icon" />
          <FaStar className="star-icon" />
          <FaStarHalf className="star-icon" />
        </div>
        <p>{product.description}</p>
        <h3> Price : {product.price}$</h3>
        <button onClick={() =>addProducts(product)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default SingleFake;
