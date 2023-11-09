import Container from "@mui/material/Container";

import { Button, Typography } from "@mui/material";

import { Box } from "@mui/material";

const RegisterAs = () => {
  // const [is_admin, setIs_admin] = useState(false);
  // const [is_customer, setIs_Customer] = useState(false);

  return (
    <Box component="main" height="100vh">
      <Container maxWidth="xl">
        <Box m={4} display="flex" justifyContent="center">
          <Typography variant="h4">Get started today as ...</Typography>
        </Box>

        <Box>
          <Button
            hover
            onClick={() => {
              // setIs_Customer(true);
            }}
          >
            Player
          </Button>
          <Button
            hover
            onClick={() => {
              // setIs_Customer(true);
            }}
          >
            Customer
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterAs;
