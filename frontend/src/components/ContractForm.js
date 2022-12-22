import React, { useState } from 'react';

import './ContractForm.css';

const ContractForm = () => {
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }

  // When the button is clicked
  const btnHandler = () => {
    alert('You have agreed to our terms and services');
  };

  return (
    <div className="App">
      <div className="container">
        <div>
          <h3>we want to inform you that we will take 10% as an additional fees on every video that will be uploaded to the system</h3>
          <label htmlFor="agree"> I agree to <b>terms and conditions</b></label>
          <input type="checkbox" id="agree" onChange={checkboxHandler} />
        </div>

        {/* Don't miss the exclamation mark* */}
        <button disabled={!agree} className="btn" onClick={btnHandler}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default ContractForm;