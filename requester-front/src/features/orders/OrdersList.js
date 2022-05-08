import style from "./orderslist.module.css";
import OrderItem from './OrderItem';

const OrdersList = ({orders, users}) => {
  return (
    <div>
      <ul className={style.ordersList}>
        {orders.map(order => {
          const assignee = users.find(user => user.id === order.assignee_id)
          return (
            <li key={order.id} className={style.orderListItem}>
              <OrderItem order={order} assignee={assignee} />
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default OrdersList;