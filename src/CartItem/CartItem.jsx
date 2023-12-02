import React from "react";
import "./CartItem.css";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleProduct } from "../Store/Reducers/productSlice";
import { calculateSubTotal } from "../Store/Reducers/subTotalSlice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(0);
  const [id, setId] = useState(0);
  const qtyRef = useRef();
  const products = useSelector((state) => state.product);

  const handleQty = (id) => {
    setQty(qtyRef.current.value);
    setId(id);
  };

  useEffect(() => {
    dispatch(handleProduct({ qty, id }));
  }, [qty]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(calculateSubTotal(products));
    }, 2000);
  }, [qty]);

  return (
    <div className="container">
      <div className="product-section">
        <div className="left">
          <div className="product-image">
            <img src={product.thumbnail} alt="product img" id="product-img" />
          </div>
          <div className="product-description">
            <h5>{product.title}</h5>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="right">
          <div>
            <select
              name=""
              id=""
              onChange={() => handleQty(product.id)}
              value={qty}
              ref={qtyRef}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>
          <div>
            <h5>${qty * product.price}</h5>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
