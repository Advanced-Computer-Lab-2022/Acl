import React, { useState } from 'react';
<<<<<<< HEAD
import ChangePass from "../components/ChangePassInst";
import './ContractForm.css';
import {useNavigate } from 'react-router-dom';
import{useParams} from 'react-router-dom';
const ContractForm = () => {
  const [agree, setAgree] = useState(false);
  const navigate=useNavigate();
  const {id} = useParams();
  const checkboxHandler = () => {
    
=======

import './ContractForm.css';

const ContractForm = () => {
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }

  // When the button is clicked
  const btnHandler = () => {
<<<<<<< HEAD
    
    alert('You have agreed to our terms and services');
    navigate(`/Instructor/${id}`)
=======
    alert('You have agreed to our terms and services');
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
  };

  return (
    <div className="App">
      <div className="container">
        <div>
          <h3>we want to inform you that we will take 10% as an additional fees on every video that will be uploaded to the system</h3>
          <label htmlFor="agree"> I agree to <b>terms and conditions</b></label>
          <input type="checkbox" id="agree" onChange={checkboxHandler} />
        </div>
<<<<<<< HEAD
        <ChangePass/>
=======

>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
        {/* Don't miss the exclamation mark* */}
        <button disabled={!agree} className="btn" onClick={btnHandler}>
          Continue
        </button>
<<<<<<< HEAD
        
=======
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
      </div>
    </div>
  );
};

export default ContractForm;