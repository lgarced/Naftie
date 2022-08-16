import React from "react";
import { Route, Routes } from "react-router-dom";
import './index.css';
import { Grid, makeStyles } from "@material-ui/core";
import { SignIn, Home, SignUp } from "./components";
import { useToken } from "./utils/auth";
// import Login from "@mui/icons-material/Login";


const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
};

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken && userToken.token
};

const App = () => {

  // const classes = useStyles();
  const token = getToken();

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
      <Route path="/">
        <Route exact path={"home"} element={<Home />} />
      </Route>
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

