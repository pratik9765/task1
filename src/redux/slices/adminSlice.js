import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    admins: JSON.parse(localStorage.getItem('admins')) || [],
    loggedInAdmin: JSON.parse(localStorage.getItem('loggedInAdmin')) || null,
  },
  reducers: {
    signup: (state, action) => {
      state.admins.push(action.payload);
      localStorage.setItem('admins', JSON.stringify(state.admins));
    },
    login: (state, action) => {
      const admin = state.admins.find(admin => admin.email === action.payload.email && admin.password === action.payload.password);
      if (admin) {
        state.loggedInAdmin = admin;
        localStorage.setItem('loggedInAdmin', JSON.stringify(admin));
      }
    },
    logout: (state) => {
      state.loggedInAdmin = null;
      localStorage.removeItem('loggedInAdmin');
    },
  },
});

export const { signup, login, logout } = adminSlice.actions;
export default adminSlice.reducer;
