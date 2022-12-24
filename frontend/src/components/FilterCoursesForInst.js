import {useEffect,useState}from 'react'

const FilterCoursesForInst = () => {
    const [courses,   setCourses  ]= useState(null)
    const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const fetchPrice=async ()=> {
  
      const response =await fetch('/instructor/viewprice')
      const json=await response.json()
  
      if(response.ok){
        setCourses(json)
      }
     
    }
    
    fetchPrice()
  
  }, [])
      return (
        <div className="viewprice"> 
          <div className="Prices">
          <p>Prices</p>
            {
              courses && courses.map((courses)=> (
                <li key={courses._id}>{courses}</li>
              ))
            }
          </div> 
          
        </div> 
        
      )
    }
    export default FilterCoursesForInst