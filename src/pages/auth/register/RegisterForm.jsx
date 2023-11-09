import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const registerSchema = yup.object({
  firstName: yup.string().required("FirstName is required"),
  lastName: yup.string().required("LastName is required"),
  username: yup.string().required("userName is required"),
  email: yup
    .string()
    .email("Email must be email")
    .required("Email is required"),
  password: yup.string().required("Password must be provided"),
});

const RegisterForm = ({ onSubmit }) => {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 3 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            fullWidth
            label="firstName"
            {...register("firstName")}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            fullWidth
            label="lastName"
            {...register("lastName")}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            fullWidth
            label="Username"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            fullWidth
            label="Email Address"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            margin="normal"
            fullWidth
            label="password"
            type="password"
            placeholder="customer"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Grid>
      </Grid>

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
    </Box>
  );
};

export default RegisterForm;
