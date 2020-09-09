import React from "react";
import { connect } from "react-redux";

const Cart = (props) => {
  let sum = 0;
  return (
    <div className="container">
      <div className="row">
        <h1>Cart</h1>
        <div className="col-lg-12">
          {props.cart.map((product) => (
            <div>
              <div className="col-lg-4">
                <div className="card" key={product.id}>
                  <div className="card-body">
                    <img src={product.product.img} alt="product" width="20px" />
                    {product.product.name} {product.product.price} *
                    {product.unit}={product.product.price * product.unit}
                  </div>
                </div>
              </div>
              <div>Total: {(sum += product.product.price * product.unit)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps)(Cart);
