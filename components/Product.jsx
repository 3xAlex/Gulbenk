import React from "react";

export default function Product(props) {
  return (
    <div className="card m-12 sm:m-3">
      <img className="product--image" src={props.image} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button className="hover:duration-700">Add to Cart</button>
      </p>
    </div>
  );
}
