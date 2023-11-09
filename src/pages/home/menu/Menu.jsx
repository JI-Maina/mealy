import { useState } from "react";
import Header from "../../../components/Header";

import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import useFetchData from "../../../hooks/useFetchData";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const { isError, isLoading, data } = useFetchData("meals", "/api/meals/");

  const meals = data ? data.data : [];

  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  const addToMenu = async () => {
    const menu = {
      menu_meals: parseInt(selected),
      date: formattedDate,
    };
    console.log(menu);
    try {
      const res = await axios.post("/api/menus/", menu, {
        headers: { Authorization: `JWT ${auth.accessToken}` },
      });

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div>
      <Header
        title={"Menus"}
        button={"Make an menu"}
        onClick={() => setOpen(true)}
      />

      <Dialog open={open}>
        <DialogTitle>
          Create Todays Menu
          <IconButton onClick={() => setOpen(!open)} sx={{ float: "right" }}>
            <CloseIcon color="primary" />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Box
            noValidate
            // component="form"
            // onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Card>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Meal</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Action</TableCell>
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
                        <Button
                          onClick={() => {
                            setSelected(meal.id);
                            addToMenu();
                          }}
                        >
                          Add
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                setOpen(!open);
                navigate("/home");
              }}
            >
              Complete Menu
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Menu;
