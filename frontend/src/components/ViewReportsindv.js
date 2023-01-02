import {useEffect,useState}from 'react'

import{useParams} from 'react-router-dom';
import AdminSidebar from "../components/NavbarrIndiv";

const ViewReports = () => {
    const [reports,   setReports  ]= useState(null)
    const {id} = useParams();
  useEffect(() => {
    const fetchReports=async ()=> {
  const v=id
      const response =await fetch(`/indiviualtrainee/viewreports/${id}`,{
        method: "GET",
    
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
      });
      const json=await response.json()
  
      if(response.ok){
        setReports(json)
      }
     
    }
    
    fetchReports()
  
  }, [])
  console.log(id)
      return (
        <div className="indiv"> 
        <AdminSidebar/>
        
        
          <div className="indiv">
          <p>Reports</p>
            {
              reports && reports.map((report)=> 
{
  return (<div>{report}</div>)
}
              )
            }
          </div> 
        </div> 
        
        
      )
    }
    export default ViewReports
    //1 minute 