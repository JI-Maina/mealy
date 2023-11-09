import MealsCard from "./MealsCard";
import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import AddMealModal from "./AddMealModal";
import useFetchData from "../../../hooks/useFetchData";
import useCreateData from "../../../hooks/useCreateMeal";
import { Container, Grid } from "@mui/material";
import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteModal from "./DeleteModal";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const Meals = () => {
  const { auth } = useAuth();
  const [open, setOpen] = useState(false);
  const [delet, setDelet] = useState(false);
  const [selected, setSelected] = useState("");

  const { isError, isLoading, data } = useFetchData("meals", "/api/meals/");

  const meals = data ? data.data : [];

  const mutation = useCreateData();

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    if (mutation.isSuccess) setOpen(false);
  }, [mutation.isSuccess]);

  const onDelete = async () => {
    try {
      axios.delete(`/api/meals/${selected}/`, {
        headers: { Authorization: `JWT ${auth.accessToken}` },
      });
      setDelet(false);
    } catch (error) {
      toast.error("failed to delete, try again");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
      <Container maxWidth="md">
        <Header
          title={"Meals"}
          button={"Add Meal"}
          onClick={() => setOpen(true)}
        />

        <AddMealModal open={open} onSubmit={onSubmit} setOpen={setOpen} />

        <DeleteModal delet={delet} setDelet={setDelet} onDelete={onDelete} />

        <Card>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Meal</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {meals.map((meal) => (
                <TableRow hover key={meal.id}>
                  <TableCell>
                    <img
                      src={meal.image ? meal.image : "/hero-img.png"}
                      height="50px"
                      width="50px"
                    />
                  </TableCell>
                  <TableCell>{meal.name}</TableCell>
                  <TableCell>{meal.price}</TableCell>
                  <TableCell>
                    <Button>Edit</Button>
                    <Button
                      onClick={() => {
                        setDelet(true);
                        setSelected(meal.id);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Container>
    </Box>
  );
};

export default Meals;
