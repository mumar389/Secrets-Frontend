import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Secret from './Secret';
import Form from './Form';
import Register from './Register';
import About from './About';
import Contact from './Contact';
import {Route,Routes} from "react-router-dom";
import Logout from './Logout';
function App() {
 
  return (
    <div className="App">
    
    <Navbar/>
    <Routes>
    <Route path="https://precious-baklava-88b41a.netlify.app/" element={<Home />} />
    <Route path="https://precious-baklava-88b41a.netlify.app/sign-in" element={<Login />} />
    <Route path="https://precious-baklava-88b41a.netlify.app/secret-page" element={<Secret />} />
    <Route path="https://precious-baklava-88b41a.netlify.app/secret-form" element={<Form />} />
    <Route path="https://precious-baklava-88b41a.netlify.app/sign-up" element={<Register />} />
    <Route path="https://precious-baklava-88b41a.netlify.app/about" element={<About />} />
    <Route path="https://precious-baklava-88b41a.netlify.app/contact" element={<Contact />} />
    <Route path="https://precious-baklava-88b41a.netlify.app/log-out" element={<Logout />} />
    </Routes>

    </div>
  );
}

export default App;
