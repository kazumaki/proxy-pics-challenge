import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CreateOrderForm from "./CreateOrderForm";
import { fetchOrders } from "./ordersAPI";
import OrdersList from "./OrdersList";

const Orders = ({ users, orders, currentUserId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch])

  return (
    <div>
      <h1>Orders</h1>
      <OrdersList orders={orders} />
      <CreateOrderForm users={users} currentUserId={currentUserId} />
    </div>
  );
}

export default Orders;