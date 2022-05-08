import { useDispatch } from "react-redux";
import { setCurrentUserId } from "../authentication/authenticationSlice";
import style from "./header.module.css";

const Header = ({currentUserId}) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setCurrentUserId(null));
  }

  return (
    <header className={style.header}>
      <div>
        {currentUserId && <button onClick={handleLogout}>Logout</button>}
      </div> 
    </header>
  );
}

export default Header;