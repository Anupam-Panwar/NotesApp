import * as React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import { makeStyles } from "@mui/material";

// const useStyles = makeStyles(() => ({
//     AddButton: {
//         display:"flex",
//         right: "20px",
//         bottom: "20px",
//         zIndex: 1,
//         position: "fixed"
//     }
// }));

const Add = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Make a new note</DialogTitle>
          <DialogContent>
            <DialogContentText>Let's make a new note.</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              multiline
              margin="dense"
              id="name"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
      <Fab
        color="primary"
        aria-label="add"
        size="large"
        style={{
          display: "flex",
          right: "20px",
          bottom: "20px",
          zIndex: 1,
          position: "fixed",
        }}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default Add;
