import { Link } from "react-router-dom";
import style from "./orderitem.module.css";

const OrderItem = ({ order }) => {
  return (
    <div className={style.orderContainer}>
      <h5>Id: </h5>
      <Link className={style.orderLink} to={`/orders/${order.id}`}>
        {order.id}
      </Link>
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
    </div>
  );
}

export default OrderItem;