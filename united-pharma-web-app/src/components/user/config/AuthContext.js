import { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
  user: null,
  token: null,
  error: null,
};

// Action types
const ActionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
};

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        token: null,
        error: action.payload.error,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        error: null,
      };
    default:
      return state;
  }
};

// Context
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const loginSuccess = (user, token) => {
    dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: { user, token } });
  };

  const loginFailure = (error) => {
    dispatch({ type: ActionTypes.LOGIN_FAILURE, payload: { error } });
  };

  const logout = () => {
    dispatch({ type: ActionTypes.LOGOUT });
  };

  return (
    <AuthContext.Provider value={{ state, loginSuccess, loginFailure, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};