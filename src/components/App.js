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
    <Route path="https://secret-web.netlify.app/" element={<Home />} />
    <Route path="https://secret-web.netlify.app/sign-in" element={<Login />} />
    <Route path="https://secret-web.netlify.app/secret-page" element={<Secret />} />
    <Route path="https://secret-web.netlify.app/secret-form" element={<Form />} />
    <Route path="https://secret-web.netlify.app/sign-up" element={<Register />} />
    <Route path="https://secret-web.netlify.app/about" element={<About />} />
    <Route path="https://secret-web.netlify.app/contact" element={<Contact />} />
    <Route path="https://secret-web.netlify.app/log-out" element={<Logout />} />
    </Routes>

    </div>
  );
}

export default App;
