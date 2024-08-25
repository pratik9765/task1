import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteEmployee } from '../redux/slices/employeeSlice';
import { toast } from 'react-toastify';
import { useState } from 'react';

function Dashboard() {
  const employees = useSelector(state => state.employee.employees);
  const dispatch = useDispatch();
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
    toast.success('Employee deleted successfully.');
  };

  const handleConfirmDelete = () => {
    if (employeeToDelete !== null) {
      handleDelete(employeeToDelete);
      setEmployeeToDelete(null);
    }
  };

  const handleOpenDeleteConfirm = (id) => {
    setEmployeeToDelete(id);
  };

  const handleCloseDeleteConfirm = () => {
    setEmployeeToDelete(null);
  };

  return (
    <div className="p-4">
      <Link to="/add-user" className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block">Add User</Link>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone Number</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id} className=''>
              <td className="py-2 px-4 border-b text-center">{employee.name}</td>
              <td className="py-2 px-4 border-b text-center">{employee.email}</td>
              <td className="py-2 px-4 border-b text-center">{employee.phoneNumber}</td>
              <td className="py-2 px-4 border-b text-center">
                <Link to={`/edit-user/${employee.id}`} className="text-blue-500 mr-2">Edit</Link>
                <button
                  onClick={() => handleOpenDeleteConfirm(employee.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {employeeToDelete !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h3 className="text-lg mb-4">Confirm Delete</h3>
            <p>Are you sure you want to delete this employee?</p>
            <div className="mt-4">
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              >
                Confirm
              </button>
              <button
                onClick={handleCloseDeleteConfirm}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
