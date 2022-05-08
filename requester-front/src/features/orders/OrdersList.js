import style from "./orderslist.module.css";
import OrderItem from './OrderItem';

const OrdersList = ({orders}) => {
  return (
    <div>
      <ul className={style.ordersList}>
        {orders.map(order => (
          <li key={order.id} className={style.orderListItem}>
            <OrderItem order={order} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersList;