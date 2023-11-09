import { Box, Container } from "@mui/material";
import Header from "../../../components/Header";

const Order = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
      <Container maxWidth="xl">
        <Header
          title={"Orders"}
          button={"Make an order"}
          // onClick={() => setOpen(true)}
        />
      </Container>
    </Box>
  );
};

export default Order;
