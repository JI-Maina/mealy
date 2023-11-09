import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import RegisterCard from "./RegisterCard";
import { Typography } from "@mui/material";

const data = [
  {
    path: "player",
    color: "#203f52",
    title: "Admin",
    onClick: { is_admin: true },
    alt: "image",
    image: "https://pngimg.com/d/football_player_PNG30.png",
    subtitle: "Create an account to take control of your footballing journey",
  },
  {
    path: "manager",
    color: "#4d137f",
    title: "Customer",
    onClick: { is_customer: true },
    alt: "Team manager image",
    image:
      "https://static.vecteezy.com/system/resources/previews/000/640/642/original/vector-soccer-manager-plan.jpg",
    subtitle: "Register as a Team Owner to lead your team to victory",
  },
];

const RegisterAs = () => {
  return (
    <Box component="main" height="100vh">
      <Container maxWidth="xl">
        <Box m={4} display="flex" justifyContent="center">
          <Typography variant="h1">Get started today as ...</Typography>
        </Box>

        <Grid2 container spacing={3}>
          {data.map((dat) => (
            <Grid2 xs={12} md={6} lg={3} key={dat.path}>
              <RegisterCard {...dat} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default RegisterAs;
