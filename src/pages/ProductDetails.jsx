import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import api from "../api/axios";
export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const fetchProduct = async () => {
    try {
      const res = await api.get("/products/" + id);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const addToCart = () => {
    const cartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = existingCart.find(
      (item) => item.productId === product.id,
    );

    let updateCart;

    if (existingItem) {
      updateCart = existingCart.map((item) => item.productId === product.id)
        ? { ...item, quantity: item.quantity + quantity }
        : item;
    } else {
      updateCart = [...existingCart, cartItem];
    }

    localStorage.setItem("cart", JSON.stringify(updateCart));
    // alert("Product added to cart");
    navigate("/cart")
  };

  return (
    <div>
      <div className="flex justify-center m-5 p-5">
        <img src={product.imageUrl}></img>
        <div className="m-5">
          <h1 className="text-3xl">{product.name}</h1>
          <p>{product.description}</p>
          <h2>₹{product.price}</h2>
          <p>
            <select
                   onChange={(e) => setQuantity(e.target.value)}
            >
              <option value="1">Quantity 1</option>
              <option value="2">Quantity 2</option>
              <option value="3">Quantity 3</option>
            </select>
          </p>
          <p>
            <button onClick={addToCart} className="w-full bg-blue-500 mt-3 p-3 text-white rounded-xl">
              Add to Cart
            </button>
          </p>
          <p>
            <button className="w-full bg-teal-500 mt-3 p-3 text-white rounded-xl">
              Buy Now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
