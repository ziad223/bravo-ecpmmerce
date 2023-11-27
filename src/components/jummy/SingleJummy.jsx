import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import "../Fake/fake.css";

const SingleJummy = ({addProducts}) => {
  const [item, setItem] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, []);

  return (
    <div className="single-fake">
      <div className="single-fake-img">
        <img src={item.thumbnail} alt="" />
    
      </div>
      <div className="single-fake-details">
        <h2>{item.category}</h2>
        <h3>{item.title}</h3>
        <div className="icons">
          <FaStar className="star-icon" />
          <FaStar className="star-icon" />
          <FaStar className="star-icon" />
          <FaStar className="star-icon" />
          <FaStarHalf className="star-icon" />
        </div>
        <p>{item.description}</p>
        <h3> Price : {item.price}$</h3>
        <h3> Count : {item.stock}</h3>
        <button onClick={() => addProducts(item)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default SingleJummy;
