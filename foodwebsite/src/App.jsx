import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TopList from './components/TopList/TopList';
import BgImage from "../src/assets/bg1.jpg"

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function App() {
  return (
    <div style={bgStyle} className='overflow-x-hidden'> 
    <Navbar/>
    <Hero/>
    <TopList/>
    </div>
  )
}

export default App;
