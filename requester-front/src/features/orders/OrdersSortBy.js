import { useDispatch } from "react-redux"
import { setOrderBy, setOrderOrder } from "./ordersSlice"

const OrdersSortBy = ({orderBy, orderOrder}) => {
  const dispatch = useDispatch()

  const handleOrderByChange = (e) => {
    dispatch(setOrderBy(e.target.value))
  }

  const handleOrderOrderChange = (e) => {
    dispatch(setOrderOrder(e.target.value))
  }

  return (
    <div>
      <h4>Sort By</h4>
      <select onChange={handleOrderByChange} value={orderBy}>
        <option value="id">Id</option>
        <option value="created_at">Created At</option>
        <option value="address">Address</option>
        <option value="status">Status</option>
      </select>
      <select onChange={handleOrderOrderChange} value={orderOrder}>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </div>
  )
}

export default OrdersSortBy