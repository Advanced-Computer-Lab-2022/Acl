import React from 'react';
import '../App.css';
import { Button } from '../pages/Button';
import './NHome.css';
import './Button.css'
import { useNavigate } from 'react-router-dom';

function NHome() {
  const navigate = useNavigate();
  const onClick1=()=>{navigate('/SignUp')}
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>An educated mind can teach many.</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns' title='SignUp'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'
          onClick={onClick1} >
          GET STARTED
        </Button> 
      
      </div>
    </div>
  );
}

export default NHome;