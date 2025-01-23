import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfile from './features/user/UserProfile';
import ModifyColor from './features/user/ModifyColor';
import UserList from './features/user/UserList';
import Login from './features/auth/Login';
import CreateAccount from './features/auth/CreateAccount';
import AddUser from './features/user/AddUser';
import Layout from './components/Layout';
import RequestList from './features/user/RequestList';
import AddRequest from './features/user/AddRequest';
import AdminRequestList from './features/user/AdminRequestList';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="create-account" element={<CreateAccount />} />

        {/* Layout Route with Nested Routes */}
        <Route path="/layout" element={<Layout />}>
          <Route path="profile" element={<UserProfile />} />
          <Route path="request-list" element={<RequestList />} />
          <Route path="add-request" element={<AddRequest />} />
          <Route path="modify-color" element={<ModifyColor />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="admin-request" element={<AdminRequestList/>}/>
        </Route>

      </Routes>
    </Router>
  );
};

export default App;
