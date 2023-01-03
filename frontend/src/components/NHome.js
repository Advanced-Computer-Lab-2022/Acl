import React from 'react';
import '../App.css';
import { Button } from './Button';
import './NHome.css';
import './Button.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../pages/Navbar'
import Footer from './Footer';

function NHome() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>An educated mind can teach many.</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={()=>{navigate("/signUp")}}
        >
          GET STARTED
        </Button>
      
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default NHome;