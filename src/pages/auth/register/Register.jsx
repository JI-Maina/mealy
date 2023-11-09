import axios from "axios";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Box, Typography, Grid } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const user = {
      username: data.username,
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      password: data.password,
      is_admin: true,
      is_customer: false,
    };

    const createUser = async () => {
      try {
        await axios.post(
          "http://127.0.0.1:8000/auth/register/",
          JSON.stringify(user),
          { headers: { "Content-Type": "application/json" } }
        );

        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    };

    createUser(user);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create account
        </Typography>

        <RegisterForm onSubmit={onSubmit} />

        <Grid container justifyContent="flex-end">
          <Grid item onClick={() => navigate("/login")}>
            Already have an account? <Link>Sign in</Link>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}Mealy {new Date().getFullYear()}.
        </Typography>
      </Box>
    </Container>
  );
};

export default RegisterPage;
