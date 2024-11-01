// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/HomeView';
import Aboutus from './views/AboutusView';
import Community from './views/CommunityView';
import Courses from './views/CoursesView';
import Register from './views/RegisterView';
import Login from './views/LoginView';
import Navbar from './components/NavbarComponent';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/community" element={<Community />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}
export default App;