import useFetchData from "../../hooks/useFetchData";
import Header from "../../components/Header";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const HomePage = () => {
  const { isLoading, isError, data } = useFetchData("menus", "/api/menus/");

  const menus = data ? data.data : [];

  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>toast.error('Failed, try again')</div>;

  return (
    <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
      <Container maxWidth="xl">
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
                <TableCell>Price</TableCell>
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
                      <TableCell>{menu.menu_meals.price}</TableCell>
                    </TableRow>
                  )
              )}
            </TableBody>
          </Table>
        </Card>
      </Container>
    </Box>
  );
};

export default HomePage;
