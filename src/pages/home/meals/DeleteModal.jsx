import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DeleteModal({ delet, setDelet, onDelete }) {
  return (
    <Dialog
      open={delet}
      onClose={() => setDelet(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure you want to delete this meal"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Once the meal is deleted you cannot recover it again.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setDelet(false)}>Cancel</Button>
        <Button onClick={onDelete} autoFocus>
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
}
