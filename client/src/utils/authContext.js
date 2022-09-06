import React ,{ useReducer, createContext } from "react";
import jwt_decode from "jwt-decode";
import { QUERY_USER } from "./queries";
import { useLazyQuery } from "@apollo/client";

const initialState = {
  user: null,
};


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
    const [getUser, {data}] = useLazyQuery(QUERY_USER);
     
    const login = async (token, user) => {

        console.log('token from GQL', token)
        localStorage.setItem("token", token);
          
          const decode = jwt_decode(token);
          console.log('This is ', decode)
          if(user) {
            decode.data = user;
        }else {
           const newData = await getUser({variables:{id: decode.data._id}})
            console.log("rettriving user data", newData)
            decode.data = newData.data.user;
        }

          if (decode.exp * 1000 > Date.now()) {
           token= decode;
          } else {
            token = null;
          }
        dispatch({
            type: "LOGIN",
            payload: token,
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