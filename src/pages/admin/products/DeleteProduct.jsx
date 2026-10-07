import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../api/axios";
export default function DeleteProduct() {
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

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      await api.delete("/products/delete/" + id);
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleDelete}>
        <h1>Confirm Product Deletion</h1>
        <p>Name: {product.name}</p>
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
        <p>ImageUrl: {product.imageUrl}</p>
        <p>
          <button>Confirm</button>
        </p>
      </form>
    </div>
  );
}
