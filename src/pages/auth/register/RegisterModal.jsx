import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const RegisterModal = ({ open, onClick, setCustomer, setCaterer }) => {
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Complete registration
        <IconButton onClick={onClick} sx={{ float: "right" }}>
          <CloseIcon color="primary" />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={3}>
          <DialogContentText id="alert-dialog-description">
            Complete registration as either a customer or a caterer
          </DialogContentText>

          <Button variant="contained" onClick={setCaterer}>
            Caterer
          </Button>

          <Button variant="contained" onClick={setCustomer}>
            Customer
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
