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

const MenuTable = () => {
  const { isError, isLoading, data } = useFetchData("menus", "/api/menus/");
  const menus = data ? data.data : [];

  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>toast.error('Failed, try again')</div>;

  return (
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
                    <Button>Edit</Button>
                  </TableCell>
                </TableRow>
              )
          )}
        </TableBody>
      </Table>
    </Card>
  );
};

export default MenuTable;
