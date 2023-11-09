import useAuth from "../../../hooks/useAuth";
import AdminOrder from "./AdminOrder";
import CustomerOrder from "./CustomerOrder";

const Order = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth.userRole === "is_customer" && <CustomerOrder />}
      {auth.userRole === "admin" && <AdminOrder />}
    </>
  );
};

export default Order;
