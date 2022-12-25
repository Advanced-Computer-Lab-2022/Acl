import {useEffect,useState}from 'react'
const Viewprice = () => {
    const [courses,   setCourses  ]= useState(null)
  
  useEffect(() => {
    const fetchPrice=async ()=> {
  
      const response =await fetch('/instructor/viewprice')
      const json=await response.json()
  
      if(response.ok){
        setCourses(json.Courses)
        console.log(json.Courses)
      }
     
    }
    
    fetchPrice()
  
  }, [])
      return (
        <div className="viewprice"> 
          <div className="Prices">
          <p>Prices</p>
            {
              courses && courses.map((course)=> 
{
  return (<div>{course}</div>)
}
              )
            }
          </div> 
        </div> 
      )
    }
    export default Viewprice
    //1 minute 
