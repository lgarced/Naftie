import React, { useContext, useMutation, useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";
import { images } from "../constants";
import { ADD_POST } from "../utils/mutations";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { MoreVert } from "@material-ui/icons";
import { QUERY_POSTS } from "../utils/queries";
import { useLazyQuery } from "@apollo/client";
import { AuthContext } from "../utils/authContext";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  const [getPosts, { data }] = useLazyQuery(QUERY_POSTS);
   const { user } = useContext(AuthContext);
   console.log("This is the user!", user);
   
  const gettingPosts = (data) => {
    console.log("this is data", data);
    try {
      if (data) {
        return getPosts(data);
      }
    } catch (error) {
      console.log(error);
    }
    //   if (data) {
    //     return data.posts.map((post) => (
    //        <Container className={classes.container}>
    //       <Post key={post._id} post={post} />
    //       </Container>
    //     ));
    //   } else {
    //   gettingPosts({ variables: { id: data } });
    //  console.log("rettriving user posts", gettingPosts);
    //   data = gettingPosts.data.user;
    //   }
  };

  gettingPosts();
  // const [like, setLike] = useState(post.like);
  // const [isLiked, setIsLiked] = useState(false);
  //   const [state, dispatch] = useContext();
  //   const { loading, data } = useQuery(ADD_POST);
  // return (
  //   <Container className={classes.container}>
  //     <Post title="Explore Utah, discover yourself." img={images.utah} />
  //   </Container>
  // );
};

export default Feed;

// export default function Feed(post) {
//   const classes = useStyles();
//   const [like, setLike] = useState(post.like);
//   const [isLiked, setIsLiked] = useState(false);
//   const [state, dispatch] = useContext();
//   const { loading, data } = useQuery(ADD_POST);
//  const [addPost, setPost] = useState({
//     message: "",
//     creator: "",
//     tags: "",
//     likeCount: 0,
//     omments: [],
//   });
//   useEffect(() => {
//     if (data) {
//       dispatch({
//         type: "SET_POSTS",
//         payload: data.posts,
//       });
//     }
//   });

//     const likeHandler = () => {
//       setLike(isLiked ? like - 1 : like + 1);
//       setIsLiked(!isLiked);
//     };

// return (
//   <div className="post">
//     <div className="postWrapper">
//       <div className="postTop">
//         <div className="postTopLeft">
//           {/* <img
//             className="postProfileImg"
//             src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
//             alt=""
//           /> */}
//           <span className="postUsername">
//             {Users.filter((u) => u.id === post?.userId)[0].username}
//           </span>
//           <span className="postDate">{post.date}</span>
//         </div>
//         <div className="postTopRight">
//           <MoreVert />
//         </div>
//       </div>
//       {/* <div className="postCenter">
//         <span className="postText">{post?.desc}</span>
//         <img className="postImg" src={post.photo} alt="" />
//       </div> */}
//       <div className="postBottom">
//         <div className="postBottomLeft">
//           <img
//             className="likeIcon"
//             src="assets/like.png"
//             onClick={likeHandler}
//             alt=""
//           />
//           <img
//             className="likeIcon"
//             src="assets/heart.png"
//             onClick={likeHandler}
//             alt=""
//           />
//           <span className="postLikeCounter">{like} people like it</span>
//         </div>
//         <div className="postBottomRight">
//           <span className="postCommentText">{post.comment} comments</span>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// }
