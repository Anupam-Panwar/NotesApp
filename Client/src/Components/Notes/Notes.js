import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./notes.css";

const theme = createTheme();

export default function Album() {
  let [cards, setCards] = React.useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/notes")
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  let [edit, setEdit] = useState(false);
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTitle("");
    setDescription("");
    setEdit(false);
  };

  const handleNewSave = () => {
    setOpen(false);
    addNote();
  };

  const handleEditSave = () => {
    setOpen(false);
    edit.title = title;
    edit.description = description;
    editNote(edit);
    setTitle("");
    setDescription("");
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  const editButtonClick = (note) => {
    setTitle(note.title);
    setDescription(note.description);
    setEdit(note);
    handleClickOpen();
  };

  const deleteNote = (id) => {
    axios
      .post("http://localhost:8000/notes/delete", { id })
      .then((res) => {
        setCards(cards.filter((card) => card._id !== id));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNote = () => {
    axios
      .post("http://localhost:8000/notes/add", { title, description })
      .then((res) => {
        console.log(res);
        refreshPage();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editNote = (notes) => {
    axios
      .post("http://localhost:8000/notes/edit", { notes })
      .then((res) => {
        console.log(res);
        setEdit(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="bg">
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.length === 0 ? (
              <Typography component="h5">No Notes</Typography>
            ) : (
              cards.map((val, index) => (
                <Grid item key={val} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {val.title}
                      </Typography>
                      <Typography>{val.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <ButtonGroup
                        variant="text"
                        aria-label="outlined button group"
                        fullWidth={true}
                      >
                        <Button onClick={() => editButtonClick(val)}>
                          <EditIcon />
                        </Button>
                        <Button onClick={() => deleteNote(val._id)}>
                          <DeleteIcon />
                        </Button>
                      </ButtonGroup>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        </Container>
        <>
          <div>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>
                {edit ? "Edit the Note" : "Make a new note"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {edit ? "Let's edit the note." : "Let's make a new note."}
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Title"
                  type="text"
                  fullWidth
                  variant="standard"
                  required
                  defaultValue={edit ? title : ""}
                  onInput={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <TextField
                  multiline
                  margin="dense"
                  id="name"
                  label="Description"
                  type="text"
                  fullWidth
                  variant="standard"
                  required
                  defaultValue={edit ? description : ""}
                  onInput={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={edit ? handleEditSave : handleNewSave}>
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <div className="AddButton">
            <Fab
              color="primary"
              aria-label="add"
              size="large"
              onClick={handleClickOpen}
            >
              <AddIcon />
            </Fab>
          </div>
        </>
      </main>
    </ThemeProvider>
  );
}
