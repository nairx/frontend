import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../api/axios";
export default function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const items = state.items || [];
  const total = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );

  const placeOrder = async () => {
    try {
      const orderItems = items.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      }));

      await api.post("/orders?userId=3", orderItems);

      //   alert("Order Placed Succesfully");

      localStorage.removeItem("cart");
      navigate("/order");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Checkout Page</h1>
      <ol>
        {items.map((item) => (
          <li key={item.productId}>
            {item.name}-{item.quantity}-{item.price * item.quantity}
          </li>
        ))}
      </ol>
      <p>Total:{total}</p>
      <p>
        <button
          onClick={placeOrder}
          className="bg-blue-700 text-white mt-5 p-3"
        >
          Place Order
        </button>
      </p>
    </div>
  );
}
