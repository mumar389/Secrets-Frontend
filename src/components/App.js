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
    <Route path="/" element={<Home />} />
    <Route path="sign-in" element={<Login />} />
    <Route path="secret-page" element={<Secret />} />
    <Route path="secret-form" element={<Form />} />
    <Route path="sign-up" element={<Register />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="log-out" element={<Logout />} />
    </Routes>

    </div>
  );
}

export default App;
