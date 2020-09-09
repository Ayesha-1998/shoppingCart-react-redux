import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../actions";

const Products = (props) => {
  const unit = 1;
  return (
    <div className="container">
      <div className="row">
        {props.products.map((product) => (
          <div className="col-lg-3 col-md-6 text-center">
            <div className="card">
              <div className="card-body">
                <img src={product.img} alt={product.name} width="200px" />
                <h3>{product.name}</h3>
                <h5>{product.price}</h5>
                <button
                  className="btn btn-info"
                  onClick={() => props.addProduct(product.id, product, unit)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps, { addProduct })(Products);
