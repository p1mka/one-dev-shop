const initialState = {
  id: "",
  img: "",
  title: "",
  description: "",
  price: "",
  rating: "0",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT": {
      return { ...state };
    }

    default:
      return state;
  }
};
