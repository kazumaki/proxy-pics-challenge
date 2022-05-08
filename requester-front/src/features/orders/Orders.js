import CreateOrderForm from "./CreateOrderForm";
import OrdersList from "./OrdersList";
import OrdersSortBy from "./OrdersSortBy";

const Orders = ({ users, orders, currentUserId, orderBy, orderOrder }) => {
  return (
    <div>
      <h1>Orders</h1>
      <CreateOrderForm users={users} currentUserId={currentUserId} />
      <OrdersSortBy orderBy={orderBy} orderOrder={orderOrder} />
      <OrdersList orders={orders} />
    </div>
  );
}

export default Orders;