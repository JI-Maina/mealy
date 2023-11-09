import * as yup from "yup";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";

// const validFileExtensions = {
//   image: ["jpg", "gif", "png", "jpeg", "svg", "webp"],
// };

// function isValidFileType(fileName, fileType) {
//   return (
//     fileName &&
//     validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
//   );
// }

const schema = yup.object({
  name: yup.string().required("item field is required"),
  price: yup.string().required("required"),
  description: yup.string(),
  //   image: yup
  //     .mixed()
  //     .test(
  //       "is-valid-type",
  //       "Not a valid image type",
  //       (value) =>
  //         value &&
  //         value.name &&
  //         isValidFileType(value.name.toLowerCase(), "image")
  //     ),
});

const AddMealModal = ({ open, onSubmit, setOpen }) => {
  const form = useForm({
    defaultValues: {
      name: "",
      price: "",
      description: "",
      //   image: "",
    },
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  return (
    <Dialog open={open}>
      <DialogTitle>
        Create New Meal
        <IconButton onClick={() => setOpen(!open)} sx={{ float: "right" }}>
          <CloseIcon color="primary" />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box
          noValidate
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                fullWidth
                label="name"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                fullWidth
                label="price"
                {...register("price")}
                error={!!errors.price}
                helperText={errors.price?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                type="file"
                disabled
                {...register("image")}
                error={!!errors.image}
                helperText={errors.image?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                margin="normal"
                fullWidth
                label="description"
                {...register("description")}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Meal
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddMealModal;
