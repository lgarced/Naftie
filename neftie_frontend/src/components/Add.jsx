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
} from "@material-ui/core"; //@mui
import { Add as AddIcon, Copyright } from "@material-ui/icons";
import { useState, useContext } from "react";
import MuiAlert from "@material-ui/lab/Alert";
// import { set } from "mongoose";
import { ADD_POST } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../utils/authContext";

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

  const { user } = useContext(AuthContext);
  console.log("This is the user!", user);

  const [addPost] = useMutation(ADD_POST);

  const [open, setOpen] = useState(false);

  const [openAlert, setOpenAlert] = useState(false);


  const [postForm, setpostForm] = useState({
    message: "",
  });
  // creator: user.id,
  // tags: "",
  // likeCount: 0,
  // comments: [],
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.name, event.target.value);
    setpostForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("This is the postForm", postForm);
    addPost({
      variables: {
        message: postForm.message,
        creator: user.id,
      },
    })
      .then((res) => {
        console.log("This is the res", res);
        setOpen(false);
        setpostForm({
          message: "",
        });
      })
      .catch((err) => {
        console.log("This is the err", err);
        setOpenAlert(true);
      })
      .finally(() => {
        setOpen(false);
      });
  };

  return (
    <>
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
                value = {postForm.title}
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
                size="medium"
                style={{ width: "100%" }}
                onChange={handleChange}
                name="message"
              />
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onSubmit={handleSubmit}
                onClick={() => {
                  setOpenAlert(true);
                  addPost({
                    variables: {
                      message: postForm.message,
                      // creator: user.id,
                      // tags: postForm.tags,
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
