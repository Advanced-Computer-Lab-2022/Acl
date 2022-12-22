import {useEffect,useState}from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Viewallco= () => {
    const [courses,   setCourses  ]= useState(null)
    const navigate = useNavigate();
  
  useEffect(() => {
    const fetchCourse=async ()=> {
  
      const response =await fetch('/corporatetrainee/viewallcourses')
      const json=await response.json()
  
      if(response.ok){
        setCourses(json)
      }
     
    }
    
    fetchCourse()
  
  }, [])
      return (
        <div className="viewcourse"> 
          <div className="Courses">
          <p>Courses</p>
            {
              courses && courses.map((courses)=> (
                <><li><button style={{ width: 300, height: 40, backgroundColor: "transparent" }} key={courses._id}>{courses}</button>
                  
                  </li>
                  <Button
                    style={{ width: 150, height: 40, backgroundColor: "#1aac83", marginTop: 1, justifyContent: 'center', alignSelf: 'flex-start' }}
                    onClick={()=>{navigate("/rateCourse")}}
                    type='submit'
                    variant="contained">
                    <h3> Rate</h3>

                  </Button>
                  <Button
                    style={{ width: 150, height: 40, backgroundColor: "#1aac83", marginTop: 1, justifyContent: 'center', alignSelf: 'flex-start' }}
                    onClick={()=>{navigate("/viewprices")}}
                    type='submit'
                    variant="contained">
                    <h3> View Price</h3>

                  </Button></>
                  
              ))
            }
          </div> 
        </div> 
      )
    }
    export default Viewallco