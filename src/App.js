import React from 'react';
import './App.css';
import Topbar from './components/topbar/Topbar.jsx';
import Home from './pages/home/Home.jsx'
import Single from './pages/single/Single.jsx'
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login'
import Register from './pages/register/Register';
import Aboutus from './pages/aboutus/Aboutus';
import {Routes,Route,Link} from "react-router-dom";
import Contact from './pages/contact/Contact';

function App() {
  const user=true;
  return (
    <div>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/abtus" element={<Aboutus/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
    </div>
  );
}

export default App;
