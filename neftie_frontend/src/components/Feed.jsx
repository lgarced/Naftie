import React  from 'react';
import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";
import { images } from "../constants";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post title="Explore Utah, discover yourself." img={images.utah} />
      <Post title="Puerto Rico, more than you think" img={images.nature} />
      <Post
        title="Learn how to take of your garden with Liberato"
        img={images.garden}
      />
      <Post
        title="Family of three, learn how the Bernard's celebrate Christmas"
        img={images.family}
      />
      <Post title="Discover California's best keep secret" img={images.mcfall} />
      <Post
        title="Our cat proposed to our raccon, see how it went"
        img={images.marriage}
      />
    </Container>
  );
};

export default Feed;
