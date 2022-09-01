import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { IconButton, Checkbox } from "@mui/material";
import {FavoriteIcon, FavoriteBorder, Favorite} from "@mui/icons-material";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

//POST HAS TO BE DEISGN ACCORDING TO THE MUTATION AND QUERY, DOCUMENTATION IS ON JIRA
const Post = ({ createdAt, creator, likeCount, message }) => {
  const [likes, setLikes] = useState(likeCount)
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        {/* <CardMedia className={classes.media} image={img} title="My Post" /> */}
        <CardContent>
          <Typography gutterBottom variant="h4">
            {message}
          </Typography>
          <Typography gutterBottom variant="h5">
            {`${creator.firstName} ${creator.lastName}`}
          </Typography>
          <Typography gutterBottom variant="p">
            {new Date(createdAt).toDateString()}
          </Typography>
          <Typography variant="body2"></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5">
            Like Count {likes}
          </Typography>
        <IconButton aria-label="add to favorites" onClick={()=> setLikes(prev=> prev === likeCount ? prev +1 : prev -1)}> 
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
