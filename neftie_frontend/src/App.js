import React, {useEffect, useState, useContext} from "react";
import { Route, Routes } from "react-router-dom";
import './index.css';
import { makeStyles } from "@material-ui/core";
import { SignIn, Home, SignUp } from "./components";
import decode from "jwt-decode"; 
import { AuthContext } from "./utils/authContext";

function setToken(userToken) {
  localStorage.setItem("token", JSON.stringify(userToken));
};

function getToken() {
  const tokenString = localStorage.getItem("token");
  if (!tokenString) return false;
  const userToken = decode(tokenString) ;
  // console.log('THIS IS ALSO THE TOKEN', tokenString)
  // console.log(userToken)
  return userToken 
};


const App = () => {
 const { user, login, logout } = useContext(AuthContext);
const [token, setToken] = useState(getToken());
useEffect(() => { 
//  console.log(user)
 setToken(user);
}, [user]);
//listen for token changes 
 useEffect(() => {
  function checkUserData() {
    const item = localStorage.getItem("token");
    console.log(item);
    setToken(getToken());
  }

  window.addEventListener("storage", checkUserData);

  return () => {
    window.removeEventListener("storage", checkUserData);
  };
}, []);


  // console.log(token)
  if (!token) {
    return (

     <Routes>
        <Route path="/signup" element={ <SignUp  />}/>
        <Route path="/" element={ <SignIn setToken={setToken} />} />
    </Routes>
    )
  }

  return (
    <Routes>
        <Route exact path={"/"} element={<Home />} />
    </Routes>
  );
};

export default App;



// import {About, Footer 
//       ,Header, Apps
//       , Market, Messages} from "./containers";
// import { Navbar} from "./components";
// import Signup from "./components/signup/Signup";
// import Login from "./components/login/Login";
// import{ SocialMedia} from "./components";
// const App = () => {
//   return (
//     <div className="app">
//       <Navbar />
//       <Header />
//       <Routes>
//         <Route path="../containers/Header">
//           <Route exact path={"header"} element={<Header />} />
//         </Route>
//         <Route path="/about">
//           <Route exact path={"about"} element={<About />} />
//         </Route>
//         <Route path="/messages">
//           <Route exact path={"messages"} element={<Messages />} />
//         </Route>
//         {/* <Route path="/market" element={<Market />} /> */}
//         <Route path="/apps">
//           <Route exact path={"apps"} element={<Apps />} />
//         </Route>
//         {/* <Route path="/signup">
//           <Signup />
//         </Route> */}
//         {/* <Route path="/login">
//           <Login />}
//         </Route> */}
//       </Routes>
//       {/* <SocialMedia /> */}
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default App;

