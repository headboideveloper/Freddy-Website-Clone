import React from 'react'
import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Delicacies from './components/Delicacies/Delicacies';
import Menu from './components/Menu/Menu';
import Catering from './components/Catering/Catering';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';
import Booking from './components/Booking/Booking';


function App() {
  return (
    <div className='bg-yellow-400'>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Delicacies/>
      <Menu/>
      <Catering/>
      <Booking/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;
