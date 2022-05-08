import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {  fetchOrder, getOrder } from "./ordersAPI";

const Order = ({users, loading}) => {
  const dispatch = useDispatch();
  const orderId = useParams().orderId;
  const order = useSelector(state => getOrder(state, orderId));
  const navigate = useNavigate();
  const assignee = users.find(user => user.id === order.assignee_id);

  useEffect(() => {
    dispatch(fetchOrder(orderId));
  }, [orderId, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const onPressGoBackButton = () => {
    navigate("/");
  }

  return (
    <div>
      <button onClick={onPressGoBackButton}>Go back</button>
      <h1>Order</h1>
      <h2>Id: {order?.id}</h2>
      <h2>Address: {order?.address}</h2>
      <h2>Status: {order?.status}</h2>
      <h2>Assignee: {assignee?.name}</h2>
      <h2>Photos:</h2>
      <ul>
        {order?.photos_url?.map(url => (
          <li key={url}>
            <img src={url} alt=""/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Order;