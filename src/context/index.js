import { createContext, useState, useReducer } from "react";
import { usersReducer } from "../reducers/users-reducer";
import rootReducer from '../reducers'
export const usersContext = createContext();

export const UsersProvider = ({ children }) => {
  // const [state,setState] = useState(['Mohamed','Ahmed','Sara']);
  const [state, dispatch] = useReducer(rootReducer, {
    users: {
      list: [],
      details: null,
    }
  });
  return (
    <usersContext.Provider value={{ state, dispatch }}>
      {children}
    </usersContext.Provider>
  );
};
