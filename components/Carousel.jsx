'use client'

import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { Products, Products2, Products3, responsive } from "./constants/index";

export default function App() {
  const product = Products.map((item) => (
    <Product
      name={item.name}
      image={item.image}
      price={item.price}
      description={item.description}
    />
  ));
  const product2 = Products2.map((item) => (
    <Product
      name={item.name}
      image={item.image}
      price={item.price}
      description={item.description}
    />
  ));
  const product3 = Products3.map((item) => (
    <Product
      name={item.name}
      image={item.image}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="App">
      <h1 className="text-center text-[30px]">Featured Cameras</h1>
      <Carousel infinite={true} autoPlay={true} autoPlaySpeed={1500} responsive={responsive}>
        {product}
      </Carousel>
      <Carousel className="mt-10" infinite={true} autoPlay={true} autoPlaySpeed={2000} responsive={responsive}>
        {product2}
      </Carousel>
      <Carousel className="mt-10 mb-20" infinite={true} autoPlay={true} autoPlaySpeed={2500} responsive={responsive}>
        {product3}
      </Carousel>
    </div>
  );
}
