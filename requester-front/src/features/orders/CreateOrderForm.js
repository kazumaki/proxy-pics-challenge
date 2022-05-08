import { useDispatch } from 'react-redux';
import { createOrder } from './ordersAPI';

const CreateOrderForm = ({ users, currentUserId }) => {
  const dispatch = useDispatch();

  const onSubmitForm = (e) => {

    e.preventDefault();
    const order = {
      assignee_id: e.target.userId.value,
      address: e.target.address.value,
    }

    dispatch(createOrder(order));
  }

  return (
    <div>
      <h4>Create Order</h4>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="userId">Assignee: </label>
        <select name="userId" id="userId">
          {users.filter(user => user.id !== currentUserId).map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
        <input type="text" name="address" id="address" placeholder="Address" />
        <input type="submit" value="Create Order" />
      </form>
    </div>
  )
}

export default CreateOrderForm;