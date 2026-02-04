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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/manage-user" element={<ManageUser />}/>
        <Route path="/manage-vm" element={<ManageVM />}/>
        <Route path="/manage-resource" element={<ManageResource />}/>
        <Route path="/manage-resource-group" element={<ManageResourceGroup />}/>
        
        <Route path="/create-user" element={<CreateUser />}/>
        <Route path="/create-vm" element={<CreateVM />}/>
        <Route path="/create-resource" element={<CreateResource />}/>
        <Route path="/create-resource-group" element={<CreateResourceGroup />}/>
      </Routes>
    </Router>
  );
}

export default App
