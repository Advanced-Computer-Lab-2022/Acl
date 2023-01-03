import React from 'react';
import {useNavigate } from 'react-router-dom';

function TermsPopup() {
    const navigate=useNavigate();
    const onClick1=()=>{
        navigate('/signUp')}
  return (
    <>
      <div>
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}> <h1>Terms & Conditions</h1> </div>
           Please read your contract carefully!
      </div>
      <div>
          you're here accepting your assigned percent (20%) of total profit of your posted materials,
          this percent is defined per course therefore for each course you'll be given 20% of which
          you'll decide to be placed in your wallet or the entered bank account, whatever will be choosen will 
          be recorded in your wallet status for extra security. There are some things that need to be considered
          before posting.
      </div>
          *For Videos:
      <div>
      1-Cannot contain any un useful information of any kind 
      </div>
      <div>
      2-Cannot contain any abusive words 
      </div>
      3-Cannot contain any harmful actions nor 
      <div>
      4-Cannot contain false information
      </div>
          *For Materials:
      <div>
        1-Need to be direct and staright forward for all users within website 
      </div>
        2-No unauthorized sales once user registered for course then he has access to all material related
        to this course  
      <div>
        3-Avoid copying materials from other Instructors within workplace otherwise account reported and
        closed immediately!
      </div>
        4-Materials need to be relevant and appropriate for users 
      <div>
        
      </div>
      You need to note that you cannot signUp without accepting our terms and conditions anything other than
      accepting will return to you to same page.
      <div>
      <button className='close-button' onClick={onClick1}>
        close   
        </button>
      </div>

      



     </>

    // <div>
      
    //   <button className="close-button" onClick={() => window.close()}>
    //     Close
    //   </button>
    // </div>
  );
}

export default TermsPopup;
