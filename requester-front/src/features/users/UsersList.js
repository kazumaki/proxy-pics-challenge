const UsersList = ({users, currentSelected, handleOnChangeUser}) => {
  return (
    <div>
      <select onChange={(e) => handleOnChangeUser(e.target.value)} value={currentSelected}>
        {users.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
    </div>
  )
}

export default UsersList;