import {useEffect,useState}from 'react'

import{useParams} from 'react-router-dom';
const RequestAccess = () => {
    const [reports,   setReports  ]= useState(null)
    const {id} = useParams();
  useEffect(() => {
    const fetchReports=async ()=> {
  const v=id
      const response =await fetch(`/corporatetrainee/requestaccess/${id}`,{
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
        <div className="viewreports"> 
          <div className="Reports">
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
    export default RequestAccess
    //1 minute 