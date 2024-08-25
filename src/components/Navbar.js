import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/adminSlice';

function Navbar() {
  const dispatch = useDispatch();
  const loggedInAdmin = useSelector(state => state.admin.loggedInAdmin);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">Admin Dashboard</Link>
      <div>
        {!loggedInAdmin ? (
          <>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="mr-4">Dashboard</Link>
            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
