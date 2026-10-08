import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const [cart, setCart] = useState([]);
const navigate = useNavigate()
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    const updateCart = cart.map((item) =>
      item.productId === productId ? { ...item, quantity: quantity } : item,
    );
    setCart(updateCart);
    localStorage.setItem("Cart", JSON.stringify(updateCart));
  };

  const removeItem = (productId) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const checkout = () => {
    navigate("/checkout", { state: { items: cart } });
  };
  return (
    <div>
      <h1>My Cart</h1>
      {cart.length === 0 && <h3>You cart is empty.</h3>}

      {cart &&
        cart.map((item) => (
          <div key={item.productId} className="flex p-3 ms-3">
            <img src={item.imageUrl} alt="" className="w-24" />
            <div>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
            </div>
            <input
              type="number"
              min={1}
              defaultValue={item.quantity}
              onChange={(e) => updateQuantity(item.productId, e.target.value)}
            />
            <button onClick={() => removeItem(item.productId)}>Remove</button>
          </div>
        ))}

      {cart.length > 0 && (
        <div className="m-3 text-2xl">
          <h1>Total: ₹{total}</h1>
          <button onClick={checkout} className="mt-3 bg-blue-700 rounded-xl p-3 text-white">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
