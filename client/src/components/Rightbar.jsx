import React from "react";
import {
  Link,
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
  Divider,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import {images} from "../constants";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
}));
//this is comment
const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: 20 }}>
        <Avatar alt="Liberato" src={images.fotome} />
        <Avatar alt="Lourdes" src={images.meseq} />
        <Avatar alt="Mark" src={images.mebigbear} />
        <Avatar alt="Agnes" src={images.meold} />
        <Avatar alt="Trevor " src={images.catto} />
        <Avatar alt="Agnes" src={images.meold} />
        <Avatar alt="Trevor " src={images.catto} />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={120} style={{ marginBottom: 25 }} cols={2}>
        <ImageListItem>
          <img src={images.mem1} alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src={images.mem2} alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src={images.mem3} alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src={images.mem4} alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src={images.mem5} alt="" />
        </ImageListItem>
        <ImageListItem>
          <img
            src={images.mem6}
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link href="#" className={classes.link} variant="body2">
        Sport
      </Link>
      <Link
        href="https://lgarced.github.io/Project-One/"
        className={classes.link}
        variant="body2"
      >
        Food
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Music
      </Link>
      <Divider flexItem style={{ marginBottom: 5 }} />
      <Link href="#" className={classes.link} variant="body2">
        Movies
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Science
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Life
      </Link>
    </Container>
  );
};

export default Rightbar;
