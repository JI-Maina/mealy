import { Link } from "react-router-dom";
import { Box, Typography, Grid, Container, Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import EmailForm from "./EmailForm";

const LoginPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 7,
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "5px 5px 5px #eee",
          border: "1px solid #e7e7e7",
          borderRadius: "10px",
          bgcolor: "background.paper",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <EmailForm />

        <Grid container>
          <Grid item xs>
            <Typography color="text.secondary" variant="body2">
              <Link
                component={Link}
                to="/register"
                underline="hover"
                variant="subtitle2"
              >
                Forgot Password?
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="text.secondary" variant="body2">
              Don&apos;t have an account? &nbsp;
              <Link
                component={Link}
                to="/register"
                underline="hover"
                variant="subtitle2"
              >
                Register
              </Link>
            </Typography>
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

export default LoginPage;
