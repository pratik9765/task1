import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { useSelector } from 'react-redux';

function App() {
  const loggedInAdmin = useSelector(state => state.admin.loggedInAdmin);

  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={loggedInAdmin ? <Dashboard /> : <Login />} />
        <Route path="/add-user" element={loggedInAdmin ? <AddUser /> : <Login />} />
        <Route path="/edit-user/:id" element={loggedInAdmin ? <EditUser /> : <Login />} />
      </Routes>

    </div>
  
  );
}

export default App;
