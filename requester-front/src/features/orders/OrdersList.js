import { Link } from 'react-router-dom';

const OrdersList = ({orders}) => {
  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <Link to={`/orders/${order.id}`}>
              {order.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersList;