//creating an action creator

export const addProduct = (id, product, unit) => {
    return {
      type: "ADD_PRODUCT",
      payload: {
        id: id,
        product: product,
        unit: unit,
      },
    };
  };
  