import React, { useState ,useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function AdminRequests() {
    const [request,setRequest] =useState("")
    const [refund,setRefund] =useState("")
    // const [cId,setCId]=useState("")
    const {id} = useParams();
    const {id1}= useParams();
  const fetchRequests = async () => {
        try {
          const response = await fetch(`/admin/accessrequests/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              'Accept': 'application/json'
            },
          });
          const json = await response.json();
          console.log(json)
          if (response.ok) { setRequest(json); }
        } catch (error) {
          console.error(error);
        }
      }
      
      const fetchRefundRequests = async () => {
        try {
          const v = id
          const response = await fetch(`/admin/refundrequests/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              'Accept': 'application/json'
            },
          });
          const json = await response.json();
          if (response.ok) { setRefund(json); }
        } catch (error) {
          console.error(error);
        }
      }
      
    useEffect(() => {
        fetchRequests();
        fetchRefundRequests();
      }, [])
    
    const approveAccess = async (id2) => {
      try {
        const response = await fetch(`/admin/approveaccess/${id2}`, {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
          },
          
        });
        const result = await response.json();
        console.log(result)
      }catch (error) {
        console.error(error);
      }
    };
    const declineAccess = async (id6) => {
      try {
        const response = await fetch(`/admin/declineaccess/${id6}`, {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
          },
          
        });
        const result = await response.json();
        console.log(result)
      }catch (error) {
        console.error(error);
      }
    };
    const approveRefund = async (id4) => {
      try {
        const response = await fetch(`/admin/approverefund/${id4}`, {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
          },
          
        });
        const result = await response.json();
        console.log(result)
      }catch (error) {
        console.error(error);
      }
    };
    const declineRefund = async (id5) => {
      try {
        const response = await fetch(`/admin/declinerefund/${id5}`, {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
          },
          
        });
        const result = await response.json();
        console.log(result)
      }catch (error) {
        console.error(error);
      }
    };    
   
    // const onClick1=async()=>{
    //     await axios.patch(`http://localhost:7007/admin/approverefund/${id}/${id1}`)}
    // const onClick2=async()=>{
    //     await axios.patch(`http://localhost:7007/admin/declinerefund/${id}/${id1}`)}
    
  
                
      // useEffect(() => {
      //   const queryString = window.location.search;
      //   const urlParams = new URLSearchParams(queryString);
      //   const id = urlParams.get("id");
      //   setId(id);
      // }, []);
    

  return (
   
    <div>
   <Tabs className="Tabs">
        <TabList>
          <Tab>Course Requests</Tab>
          <Tab>Refund Requests</Tab>
        </TabList>
        <TabPanel>
        <Table striped bordered hover variant="light">
        <div className="zizo">
       <thead>
        <tr className="kiko">
         <th>#</th>
          <th>ID</th>
          <th>Trainee</th>
          <th>Course Name</th>
          <th>Status</th>
          <th> </th>
        </tr>
        </thead>

        <tbody>
        {request && request.map((request) => (
            <tr>
              <td ></td>
              <td >{request._id}</td>
              <td >{request.corporatetrainee}</td>
              <td >{request.courseId}</td>
              <td >{request.status}</td>
              <div className='btn-group' >
              <button class="btn btn-outline-success" onClick={()=>approveAccess(request._id)}>Approve</button>
              <button class="btn btn-outline-danger" onClick={()=>declineAccess(request._id)}>Decline</button>

                 
                 </div>
            </tr>
          ))}
        </tbody>
        </div>
       </Table>
        </TabPanel>

        <TabPanel>
       <Table striped bordered hover variant="seconadry">
        <div className="zizo">
       <thead>
        <tr className="kiko">
          <th>#</th>
          <th>ID</th>
          <th>Trainee</th>
          <th>Course Name</th>
          <th>Status</th>
          <th> </th>
        </tr>
        </thead>

        <tbody>
        {refund && refund.map((refund) => (
            
            <tr>
       
              <td ></td>
              <td >{refund._id}</td>
              <td >{refund.trainee}</td>
              <td >{refund.course}</td>
              
              <td >{refund.status}</td>
              <div className='btn-group' >
              <button class="btn btn-outline-success" onClick={()=>approveRefund(refund._id)}>Approve</button>
                 <button class="btn btn-outline-danger" onClick={()=>declineRefund(refund._id)}>Decline</button>
                 </div>
            
            </tr>
            
          ))}
        </tbody>
        </div>
       </Table>
       </TabPanel>
    </Tabs>
    </div>

  );
}
export default AdminRequests;