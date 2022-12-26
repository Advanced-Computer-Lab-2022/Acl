import {useEffect,useState}from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Viewrate = () => {

    const [rate,   setRate  ]= useState([])
  

    const getRate = async () =>{
    const params = new URLSearchParams(window.location.search);
    const instructorId = params.get('id');
    console.log(instructorId);
    await axios.get(`http://localhost:7007/instructor/viewrating?id=${instructorId}`).then(
        (res) =>{
            const resRate = res.data
            console.log(resRate)
            setRate(resRate)
        })}

      return (


          
        <div className="Viewrate">
            <Box sx={{marginBottom: 2}}>
            <Button variant="contained"
            onClick={getRate}
            margin="normal"
            padding="normal"
            >Load Ratings</Button>
            {/* margin */}
            </Box></div>
    
         
          
       
      )
    }
    export default Viewrate