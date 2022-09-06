import React, { useState } from "react";
// import { useQuery } from '@apollo/client';
import { Grid, makeStyles } from "@material-ui/core";
import Add from "../Add";
import Feed from "../Feed";
import Leftbar from "../Leftbar";
import Navbar from "../Navbar/Navbar";
import Rightbar from "../Rightbar";
import { Box, createTheme, ThemeProvider } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Box bgColor={"backgroundColor.default"} color={"box.primary"}>
          <Navbar />
          <Grid container>
            <Grid item sm={2} xs={2}>
              <Leftbar setMode={setMode} mode={mode} />
            </Grid>
            <Grid item sm={7} xs={10}>
              <Feed />
            </Grid>
            <Grid item sm={3} className={classes.right}>
              <Rightbar />
            </Grid>
          </Grid>
          <Add />
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Home;
