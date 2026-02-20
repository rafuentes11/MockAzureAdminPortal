import { useState } from 'react';

import './App.css'

import Home from './pages/Home.jsx'
import ManageUser from './pages/ManageUser.jsx'
import ManageVM from './pages/ManageVM.jsx'
import ManageResource from './pages/ManageResource.jsx'
import ManageResourceGroup from './pages/ManageResourceGroup.jsx'
import CreateUser from './pages/CreateUser.jsx';
import CreateVM from './pages/CreateVM.jsx';
import CreateResource from './pages/CreateResource.jsx';
import CreateResourceGroup from './pages/CreateResourceGroup.jsx';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([]);
  const [vms, setVMs] = useState([]);
  const [resources, setResources] = useState([]);
  const [resourceGroups, setResourceGroups] = useState([]);

  const deleteUser = (indexToDelete) => {
    setUsers(prev =>
      prev.filter((user, index) => index !== indexToDelete)
    );
  };

  const deleteVM = (indexToDelete) => {
    setVMs(prev =>
      prev.filter((vm, index) => index !== indexToDelete)
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/manage-user" element=
          {<ManageUser
            users={users}
            deleteUser={deleteUser}
          />} />
        <Route path="/manage-vm" element={<ManageVM vms={vms} setVMs={setVMs} deleteVM={deleteVM}/>} />
        <Route path="/manage-resource" element={<ManageResource resources={resources} />} />
        <Route path="/manage-resource-group" element={<ManageResourceGroup resourceGroups={resourceGroups} />} />

        <Route path="/create-user" element={<CreateUser setUsers={setUsers} />} />
        <Route path="/create-vm" element={<CreateVM setVMs={setVMs} />} />
        <Route path="/create-resource" element={<CreateResource setResources={setResources} />} />
        <Route path="/create-resource-group" element={<CreateResourceGroup setResourceGroups={setResourceGroups} />} />
      </Routes>
    </Router>
  );
}

export default App
