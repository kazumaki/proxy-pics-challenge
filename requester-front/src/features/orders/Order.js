import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {  fetchOrder, getOrder } from "./ordersAPI";

const Order = ({loading}) => {
  const dispatch = useDispatch();
  const orderId = useParams().orderId;
  const order = useSelector(state => getOrder(state, orderId));
  const navigate = useNavigate();

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
      <h2>{order?.id}</h2>
      <h2>{order?.status}</h2>
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