import { combineReducers } from "redux";

//state
const Products = [
  {
    id: 1,
    name: "Robo 1",
    price: 100,
    img: "https://robohash.org/1?set=set3",
  },
  {
    id: 2,
    name: "Robo 2",
    price: 1000,
    img: "https://robohash.org/2?set=set3",
  },
  {
    id: 3,
    name: "Robo 3",
    price: 1020,
    img: "https://robohash.org/3?set=set3",
  },
  {
    id: 4,
    name: "Robo 4",
    price: 1000,
    img: "https://robohash.org/4?set=set3",
  },
  {
    id: 5,
    name: "Robo",
    price: 100,
    img: "https://robohash.org/1?set=set2",
  },
  {
    id: 6,
    name: "Robooo",
    price: 1000,
    img: "https://robohash.org/2?set=set2",
  },
  {
    id: 7,
    name: "Roboooooo",
    price: 100,
    img: "https://robohash.org/3?set=set2",
  },
  {
    id: 8,
    name: "Roboooooooooooo",
    price: 1000,
    img: "https://robohash.org/4?set=set2",
  },
  {
    id: 9,
    name: "kitty robo 1",
    price: 100,
    img: "https://robohash.org/4?set=set4",
  },
  {
    id: 10,
    name: "kitty robo 2",
    price: 1000,
    img: "https://robohash.org/5?set=set4",
  },
  {
    id: 11,
    name: "kitty robo 3",
    price: 100,
    img: "https://robohash.org/6?set=set4",
  },
  {
    id: 12,
    name: "kitty robo 4",
    price: 10002,
    img: "https://robohash.org/7?set=set4",
  },
];

//reducer to show product

const showProduct = (state = Products) => {
  return state;
};

//reducer to add product to the cart

const cartReducer = (state = [], action) => {
  if (action.type === "ADD_PRODUCT") {
    //if product exist in our cart
    const existingProduct = state.filter((p) => p.id === action.payload.id);
    if (existingProduct.length > 0) {
      //product not existing in cart
      const withoutExisting = state.filter((p) => p.id !== action.payload.id);
      //if product already exist we need to increase the units of product
      const updatedUnitsProduct = {
        ...existingProduct[0],
        unit: existingProduct[0].unit + action.payload.unit,
      };
      //add product in cart with units increased
      return [...withoutExisting, updatedUnitsProduct];
    } else {
      // if product is not there in cart
      return [...state, action.payload];
    }
  }
  return state;
};

export default combineReducers({
  cart: cartReducer,
  products: showProduct,
});
