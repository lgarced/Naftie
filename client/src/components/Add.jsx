import React from "react";
import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import {
  Add as AddIcon,
  EmojiEmotions,
  FirstPage,
  Image, 
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { useState, useContext } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { ADD_POST } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../utils/authContext";
import { QUERY_USER, QUERY_POSTS, QUERY_POST } from "../utils/queries";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const { user } = useContext(AuthContext);
  console.log("This is the user!", user);

  const [postForm, setpostForm] = useState({
    title: "",
    message: "",
    commentAuthor: "",
  });

  const [addPost, { data, loading, error }] = useMutation(ADD_POST);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setpostForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <p>hi</p>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            {/* <div className={classes.item}>
              <TextField
                id="standard-basic"
                value={postForm.title}
                label="Title"
                size="small"
                style={{ width: "100%" }}
                onChange={handleChange}
                name="title"
              />
            </div> */}
            <div className={classes.item}>
              <TextField
                placeholder="What's on your mind?"
                id="outlined-multiline-static"
                multiline
                rows={4}
                value={postForm.message}
                variant="outlined"
                label="Message"
                size="small"
                style={{ width: "100%" }}
                onChange={handleChange}
                name="message"
              />
              <Stack direction="row" gap={1} mt={2} mb={3}>
                <EmojiEmotions color="primary" />
                <Image color="secondary" />
                <VideoCameraBack color="success" />
                <PersonAdd color="error" />
              </Stack>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={() => {
                  setOpenAlert(true);
                  addPost({
                    variables: {
                      message: postForm.message,
                      creator: user.data._id,
                    },
                  });
                  console.log({
                    variables: {
                      message: postForm.message,
                      creator: {
                        _id: user.data._id,
                        firstName: user.data.firstName,
                        lastName: user.data.lastName,
                        email: user.data.email,
                      },
                    },
                  });
                }}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;