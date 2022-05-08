import CreateOrderForm from "./CreateOrderForm";
import OrdersList from "./OrdersList";
import OrdersSortBy from "./OrdersSortBy";

const Orders = ({ users, orders, currentUser, orderBy, orderOrder }) => {
  return (
    <div>
      <h1>{`Welcome ${currentUser.name} to your orders page`}</h1>
      <CreateOrderForm users={users} currentUserId={currentUser.id} />
      <OrdersSortBy orderBy={orderBy} orderOrder={orderOrder} />
      <OrdersList orders={orders} />
    </div>
  );
}

export default Orders;