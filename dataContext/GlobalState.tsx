import { createContext, useReducer, useEffect } from "react";
import { ACTIONS } from "./Actions";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const initialState = {
    notify: {},
    cart: [],
    orders: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.NOTIFY:
        return {
          ...state,
          notify: action.payload,
        };
      case ACTIONS.ADD_CART:
        return {
          ...state,
          cart: action.payload,
        };
      case ACTIONS.ADD_ORDER:
        return {
          ...state,
          orders: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <DataContext.Provider value={{ state, dispatch }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default DataProvider;
