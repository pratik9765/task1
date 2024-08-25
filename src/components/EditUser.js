import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from '../redux/slices/employeeSlice';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
  const { id } = useParams();
  const employees = useSelector(state => state.employee.employees);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('Male');
  const [maritalStatus, setMaritalStatus] = useState('Single');
  const [profilePhoto, setProfilePhoto] = useState(null);

  useEffect(() => {
    const employee = employees.find(emp => emp.id === parseInt(id));
    if (employee) {
      setName(employee.name);
      setEmail(employee.email);
      setPhoneNumber(employee.phoneNumber);
      setGender(employee.gender);
      setMaritalStatus(employee.maritalStatus);
      setProfilePhoto(employee.profilePhoto);
    }
  }, [id, employees]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployee = {
      id: parseInt(id),
      name,
      email,
      phoneNumber,
      gender,
      maritalStatus,
      profilePhoto,
    };
    dispatch(updateEmployee(updatedEmployee));
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl mb-4">Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <div className="flex">
            <label className="mr-4">
              <input
                type="radio"
                value="Male"
                checked={gender === 'Male'}
                onChange={() => setGender('Male')}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="Female"
                checked={gender === 'Female'}
                onChange={() => setGender('Female')}
              />
              Female
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Marital Status</label>
          <select
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded"
          >
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Profile Photo</label>
          <input
            type="file"
            onChange={(e) => setProfilePhoto(URL.createObjectURL(e.target.files[0]))}
            className="mt-1 block w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update User</button>
      </form>
    </div>
  );
}

export default EditUser;
