import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegisterAs = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Stack spacing={5} mt={20}>
        <Typography variant="h4">
          Register today as either a customer or a caterer
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/register/caterer")}
        >
          Caterer
        </Button>

        <Button
          variant="contained"
          onClick={() => navigate("/register/customer")}
        >
          Customer
        </Button>
      </Stack>
    </Container>
  );
};

export default RegisterAs;
