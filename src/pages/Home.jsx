import React from "react";
import { useState, useEffect } from "react";
import api from "../api/axios";
export default function Home() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="flex flex-wrap justify-center">
      {products &&
        products.map((product) => (
          <div key={product.id} className="w-[350px] m-3 p-3 rounded-xl border border-gray-900">
            <img src={product.imageUrl} alt="" />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h2>{product.price}</h2>
          </div>
        ))}
    </div>
  );
}
