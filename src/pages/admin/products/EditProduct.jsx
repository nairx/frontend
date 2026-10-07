import React from "react";
import api from "../../../api/axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function EditProduct() {
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

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      await api.put("/products/update/" + id, product);
      navigate("/admin/products")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <h1>Product Edit Form</h1>
        <p>
          <input
            type="text"
            defaultValue={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </p>
        <p>
          <input
            type="text"
            defaultValue={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </p>
        <p>
          <input
            type="number"
            defaultValue={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </p>
        <p>
          <input
            type="text"
            defaultValue={product.imageUrl}
            onChange={(e) =>
              setProduct({ ...product, imageUrl: e.target.value })
            }
          />
        </p>
        <p>
          <button>Update</button>
        </p>
      </form>
    </div>
  );
}
