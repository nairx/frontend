import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import api from "../api/axios";
export default function ProductDetails() {
  const [product, setProduct] = useState({});
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

  return (
    <div>
        <div className="flex justify-center m-5 p-5">
          <img src={product.imageUrl}></img>
          <div className="m-5">
            <h1 className="text-3xl">{product.name}</h1>
            <p>{product.description}</p>
            <h2>₹{product.price}</h2>
            <p>
                In Stock:
                <select className="w-[100px]">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </p>
            <p>
                <button className="w-full bg-blue-500 mt-3 p-3 text-white rounded-xl">Add to Cart</button>
            </p>
            <p>
                <button className="w-full bg-teal-500 mt-3 p-3 text-white rounded-xl">Buy Now</button>
            </p>
          </div>
        </div>
 
    </div>
  );
}
