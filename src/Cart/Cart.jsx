import React from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const { products, subtotal } = useSelector((state) => state.product);
  return (
    <div className="container mt-3">
      <div className="productSection">
        {products.map((product, index) => (
          <CartItem key={index} product={product} />
        ))}
      </div>
      <div className="subtotal-section">
        <div className="subtotal">
          <div className="subtotal-left">
            <p>SubTotal</p>
          </div>
          <div className="subtotal-right">
            <h5>${subtotal}</h5>
          </div>
        </div>
        <div className="subtotal">
          <div className="subtotal-left">
            <p>Delivery Charges</p>
          </div>
          <div className="subtotal-right">
            <h5>Free</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
