import { Box, Container } from "@mui/material";

import {
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import useFetchData from "../../../hooks/useFetchData";

const AdminOrder = () => {
  const { isError, isLoading, data } = useFetchData("orders", "/api/orders/");
  const orders = data ? data.data : [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>toast.error('Failed, try again')</div>;

  return (
    <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
      <Container maxWidth="xl">
        <Card>
          <CardHeader
            title="Ordered Today"
            sx={{ display: "flex", justifyContent: "center", mb: "2" }}
          />

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Meal</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Price</TableCell>
                {/* <TableCell>Action</TableCell> */}
              </TableRow>
            </TableHead>

            <TableBody>
              {orders.map((order) => (
                <TableRow hover key={order.id}>
                  <TableCell>
                    <img
                      src={
                        order.chosen_meal.image
                          ? order.chosen_meal.image
                          : "/hero-img.png"
                      }
                      height="50px"
                      width="50px"
                    />
                  </TableCell>
                  <TableCell>{order.chosen_meal.name}</TableCell>
                  <TableCell>
                    {order.customer.first_name} {order.customer.last_name}
                  </TableCell>
                  <TableCell>{order.chosen_meal.price}</TableCell>
                  {/* <TableCell>
                        <Button
                          hover
                          onClick={() =>
                            handleOrder(menu.id, menu.menu_meals.id)
                          }
                        >
                          Order
                        </Button>
                      </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Container>
    </Box>
  );
};

export default AdminOrder;
