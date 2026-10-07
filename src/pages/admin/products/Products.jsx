import React, { useEffect, useState } from "react";
import api from "../../../api/axios";
import { Link } from "react-router-dom";
export default function Products() {
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
    <div>
      <div className="flex justify-between">
        <h1> Product Management</h1>
        <Link to="/admin/products/add">Add Product</Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image Url</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.imageUrl}</td>
                <td>
                  <Link to={`edit/${product.id}`}>Edit</Link>|
                   <Link to={`delete/${product.id}`}>Delete</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
