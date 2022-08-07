import React from "react";
// import {About, Footer 
//       ,Header, Apps
//       , Market, Messages} from "./containers";
// import { Navbar} from "./components";
// import Signup from "./components/signup/Signup";
// import Login from "./components/login/Login";
// import{ SocialMedia} from "./components";
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Grid, makeStyles } from "@material-ui/core";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar/Navbar";
import Rightbar from "./components/Rightbar";


const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
};

export default App;


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

