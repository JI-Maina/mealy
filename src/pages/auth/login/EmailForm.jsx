import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";

const regSchema = yup.object().shape({
  userName: yup.string().required("Please enter an Email"),
  password: yup.string().required("Please enter a password"),
});

const EmailForm = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const form = useForm({
    defaultValues: { userName: "", password: "" },
    resolver: yupResolver(regSchema),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data) => {
    const user = {
      username: data.userName,
      password: data.password,
    };
    console.log(user);
    try {
      const res = await axios.post("/auth/login/", user, {
        headers: { "Content-Type": "application/json" },
      });

      const accessToken = res.data.access_token;
      const refreshToken = res.data.refresh_token;
      const username = res.data.username;
      const userRole = res.data.user_role;

      setAuth({ accessToken, refreshToken, username, userRole });
      console.log(res.data);
      reset();
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      if (err.message === "Network Error") {
        toast.error("No server response!");
      } else if (err.response.request.status === 401) {
        toast.error("Invalid Username or Password! try again.");
      } else {
        toast.error("Login failed! check your internet connection.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        margin="normal"
        type="text"
        fullWidth
        label="Username"
        {...register("userName")}
        error={!!errors.userName}
        helperText={errors.userName?.message}
      />

      <TextField
        margin="normal"
        fullWidth
        label="Password"
        type="password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      {/* <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      /> */}

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
    </form>
  );
};

export default EmailForm;
