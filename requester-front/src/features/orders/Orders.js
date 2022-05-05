import CreateOrderForm from "./CreateOrderForm";
import OrdersList from "./OrdersList";

const Orders = ({ users, orders, currentUserId }) => {
  return (
    <div>
      <h1>Orders</h1>
      <OrdersList orders={orders} />
      <CreateOrderForm users={users} currentUserId={currentUserId} />
    </div>
  );
}

export default Orders;