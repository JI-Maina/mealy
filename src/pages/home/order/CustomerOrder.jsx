import { Box, Container } from "@mui/material";
import Header from "../../../components/Header";
import useAuth from "../../../hooks/useAuth";

import {
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import useFetchData from "../../../hooks/useFetchData";
import axios from "../../../api/axios";
import { toast } from "react-toastify";
import OrdersTable from "./OrdersTable";

const CustomerOrder = () => {
  const { auth } = useAuth();

  const { isError, isLoading, data } = useFetchData("menus", "/api/menus/");
  const menus = data ? data.data : [];

  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  const handleOrder = async (id, mid) => {
    const order = {
      menu: id,
      chosen_meal: mid,
    };
    console.log(order);
    try {
      await axios.post("/api/orders/", order, {
        headers: { Authorization: `JWT ${auth.accessToken}` },
      });

      toast.success("order created successful");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>toast.error('Failed, try again')</div>;

  return (
    <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
      <Container maxWidth="md">
        <Header
          title={"Orders"}
          button={"Make an order"}
          // onClick={() => setOpen(true)}
        />

        <Card>
          <CardHeader
            title="Todays Special"
            sx={{ display: "flex", justifyContent: "center", mb: "2" }}
          />

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Meal</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {menus.map(
                (menu) =>
                  menu.date === formattedDate && (
                    <TableRow hover key={menu.id}>
                      <TableCell>
                        <img
                          src={
                            menu.menu_meals.image
                              ? menu.menu_meals.image
                              : "/hero-img.png"
                          }
                          height="50px"
                          width="50px"
                        />
                      </TableCell>
                      <TableCell>{menu.menu_meals.name}</TableCell>
                      <TableCell>{menu.menu_meals.description}</TableCell>
                      <TableCell>{menu.menu_meals.price}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() =>
                            handleOrder(menu.id, menu.menu_meals.id)
                          }
                        >
                          Order
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
              )}
            </TableBody>
          </Table>
        </Card>

        <br />

        <OrdersTable />
      </Container>
    </Box>
  );
};

export default CustomerOrder;
