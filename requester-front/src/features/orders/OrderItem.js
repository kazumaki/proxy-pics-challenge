import { Link } from "react-router-dom";
import style from "./orderitem.module.css";

const OrderItem = ({ order, assignee }) => {
  return (
    <Link  to={`/orders/${order.id}`} className={style.orderContainer}>
        <h5>Id: </h5>
          {order.id}
        <h5>Date of creation: </h5>
        <div>
          {new Date(order.created_at).toLocaleDateString("en-US")}
        </div>
        <h5>Status: </h5>
        <div>
          {order.status}
        </div>
        <h5>Address: </h5>
        <div>
          {order.address}
        </div>
        <h5>Assignee: </h5>
        <div>
          {assignee?.name}
        </div>
    </Link>
  );
}

export default OrderItem;