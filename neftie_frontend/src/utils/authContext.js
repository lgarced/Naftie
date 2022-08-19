import React ,{ useReducer, createContext } from "react";
import jwtDecode from "jwt-decode";

const initialState = {
  user: null,
};

if (localStorage.getItem("token")) {
    const decode = jwtDecode(localStorage.getItem("token"));

    if (decode.exp * 1000 > Date.now()) {
        initialState.user = decode;
    } else  {
        initialState.user = decode;
    }

}

const AuthContext = createContext( {
    user: null,
    login: (userData) => {},
    logout: () => {},
} );

const authReducer = (state, action) => { 
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
}

const AuthProvider = ({ children }) => { 
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (userData) => {
        localStorage.setItem("token", JSON.stringify(userData));
        dispatch({
            type: "LOGIN",
            payload: userData,
        });
    }
    const logout = () => {
        localStorage.removeItem("token");
        dispatch({
            type: "LOGOUT",
        });
    }
    return (
        <AuthContext.Provider 
            value={{ user: state.user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };