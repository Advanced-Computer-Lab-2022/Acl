import {useEffect,useState}from 'react'
const Viewprice = () => {
    const [courses,   setCourses  ]= useState(null)
  
  useEffect(() => {
    const fetchPrice=async ()=> {
  
      const response =await fetch('/instructor/viewprice')
      const json=await response.json()
  
      if(response.ok){
<<<<<<< HEAD
        setCourses(json.Courses)
        console.log(json.Courses)
=======
        setCourses(json)
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
      }
     
    }
    
    fetchPrice()
  
  }, [])
      return (
        <div className="viewprice"> 
          <div className="Prices">
          <p>Prices</p>
            {
<<<<<<< HEAD
              courses && courses.map((course)=> 
{
  return (<div>{course}</div>)
}
              )
=======
              courses && courses.map((courses)=> (
                <li key={courses._id}>{courses}</li>
              ))
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
            }
          </div> 
        </div> 
      )
    }
<<<<<<< HEAD
    export default Viewprice
    //1 minute 
=======
    export default Viewprice
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
