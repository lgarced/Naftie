import React ,{useContext, useMutation, useState} from 'react';
import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";
import { images } from "../constants";
import { ADD_POST } from "../utils/mutations";
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}
));


// const Feed = () => {
//   const classes = useStyles();
//   const [addPost] = useMutation(ADD_POST);
//   const [post, setPost] = useState({
//     message: "",
//     image: "",
//   });


// function Feed() {
//   const [state, dispatch] = useContext();
//   const{loading, data} = useQuery(POSTS);
  
//   useEffect(() => { 
//      if (data) {
//       dispatch: 
//      }

//   })

// }


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
