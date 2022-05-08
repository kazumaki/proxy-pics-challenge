import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CreateUser } from '../users/usersAPI';

const Signup = ({loading}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(CreateUser(name));
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="submit" disabled={loading}> Submit </button>
    </form>
  )
}

export default Signup;