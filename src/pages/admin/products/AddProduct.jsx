import React, { useState } from "react";
import api from "../../../api/axios";
import { useNavigate } from "react-router-dom";
export default function AddProduct() {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const handleAdd = async (e) => {
    try {
      e.preventDefault();
      const res = await api.post("/products", product);
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleAdd}>
        <h1>Add New Product</h1>
        <p>
          <input
            type="text"
            placeholder="Product Name"
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </p>

        <p>
          <input
            type="text"
            placeholder="Description"
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </p>

        <p>
          <input
            type="number"
            placeholder="Price"
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </p>

        <p>
          <input
            type="text"
            placeholder="ImageUrl"
            onChange={(e) =>
              setProduct({ ...product, imageUrl: e.target.value })
            }
          />
        </p>

        <p>
          <button>Add</button>
        </p>
      </form>
    </div>
  );
}
