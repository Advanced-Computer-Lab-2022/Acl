import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./AdminCreateUsers.css"
import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import Navbar from "./Navbarr";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { DataGrid } from '@mui/x-data-grid';

function ViewReports() {
  
    const [reports,   setReports  ]= useState(null)//individualtrainee
    const [instReports, setInstReports]= useState(null)//onstructor
    const [cReports, setCReports]= useState(null)//corporate
    const {id} = useParams();
    const {id1} = useParams();
    const [status, setStatus] = useState('');
    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
      console.log(e);
      setValue(e)
    }
    const handleChange = (event) => {
      setStatus(event.target.value);

    }
    const reportBody={status}
    const updateStatus = async (id1) => {
      try {
        const response = await fetch(`http://localhost:7007/admin/${id1}`, {
          method: 'PATCH',
          body: JSON.stringify(reportBody),
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
  useEffect(() => {
    //individual trainee
    const fetchReports=async ()=> {
      const v=id
      const response =await fetch(`http://localhost:7007/admin/getindividualreports/${id}`,{
        method: "GET",
    
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
      });
      const json=await response.json()
      console.log(json)
      if(response.ok){
        setReports(json)
      }
     
    }
    fetchReports()
  //corporate trainee
    const fetchCReports=async ()=> {
  const v=id
      const response =await fetch(`http://localhost:7007/admin/getcorporatereports/${id}`,{
        method: "GET",
    
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
      });
      const json=await response.json()
      console.log(json)
      if(response.ok){
        setCReports(json)
      }
     
    }
    fetchCReports()
    //instructor
    const fetchInstReports=async ()=> {
      const v=id
          const response =await fetch(`http://localhost:7007/admin/getinstructorreports/${id}`,{
            method: "GET",
        
            headers: {
              "Content-Type": "application/json",
              'Accept': 'application/json'
            },
          });
          const json=await response.json()
          console.log(json)
          if(response.ok){
            setInstReports(json)
          }
         
        }
    fetchInstReports()
    updateStatus()
  
  }, [])

 
  return (
    <div >
      <Navbar/>
      <div >
    <div className="App">
      <Tabs className="Tabs">
        <TabList>
          <Tab>Corporate Trainee</Tab>
          <Tab>Individual Trainee</Tab>
          <Tab>Instructor</Tab>
          
        </TabList>
        <TabPanel>
{/* corporate */}
        <Table striped bordered hover variant="dark">
        <div className="kiko">
       <thead>
        <tr >
          <th>#</th>
          <th>ID</th>
          <th>Name</th>
          <th>Course Name</th>
          <th>Type</th>
          <th>Trainee</th>
          <th>Description</th>
          {/* <th>Followups</th> */}
          <th>Status</th>
        </tr>
        </thead>

        <tbody>
        {cReports && cReports.map((cReports) => (
            <tr>
              <td></td>
              <td >{cReports._id}</td>
              <td >{cReports.name}</td>
              <td>{cReports.course}</td>
              <td >{cReports.type}</td>
              <td>{cReports.corporatetrainee}</td>
              <td >{cReports.Description}</td>
              {/* <td >{cReports.followups}</td> */}
              <td >{cReports.status}</td>
              <select style={{color:"black"}} id={id1} name="status" value={status} 
              onClick={updateStatus(cReports._id)} onChange={handleChange}>
             <option value="unseen">Unseen</option>
        <option value="pending">Pending</option>
        <option value="resolved">Resolved</option>
        
      </select>
              <div id="log"></div>
             
            </tr>
          ))}
        </tbody>
        </div>
       </Table>
        </TabPanel>
{/* individual */}
        <TabPanel>
       <Table striped bordered hover variant="dark">
        <div >
       <thead>
       <tr >
          <th>#</th>
          <th>ID</th>
          <th>Name</th>
          <th>Course Name</th>
          <th>Type</th>
          <th>Trainee</th>
          <th>Description</th>
          {/* <th>Followups</th> */}
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {reports && reports.map((reports) => (
            <tr>
            <td></td>
            <td >{reports._id}</td>
            <td >{reports.name}</td>
            <td>{reports.course}</td>
            <td >{reports.type}</td>
            <td>{reports.individualtrainee}</td>
            <td >{reports.Description}</td>
            {/* <td >{reports.followups}</td> */}

             <td>{reports.status}</td>
            
             <select style={{color:"black"}} id={reports._id} name="status" value={status} onClick={updateStatus(reports._id)} onChange={handleChange}>
             <option value="unseen">Unseen</option>
        <option value="pending">Pending</option>
        <option value="resolved">Resolved</option>
        
      </select>
              <div id="log"></div>
              <div id="log"></div>
            </tr>
          ))}
        </tbody>
        </div>
       </Table>
       </TabPanel>
       
       <TabPanel>
       <Table striped bordered hover variant="dark">
        <div >
       <thead>
        <tr >
          <th>#</th>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Course Name</th>
          <th> Instructor</th>
          <th>Description</th>
          {/* <th>Followups</th> */}
          <th>Status</th>
          <th></th>
        </tr>
        </thead>

        <tbody>
        {instReports && instReports.map((instReports) => (
            <tr>
              <td></td>
              <td >{instReports._id}</td>
              <td >{instReports.name}</td>
              <td >{instReports.type}</td>
              <td >{instReports.course}</td>
              <td >{instReports.instructor}</td>
              <td >{instReports.Description}</td>
              {/* <td>{instReports.followups}</td> */}
              <td >{instReports.status}</td>

               <select style={{color:"black"}} id={instReports._id} name="status" value={instReports.status} 
                onChange={handleChange}>
             <option value="unseen" onClick={updateStatus(instReports._id)}>Unseen</option>
        <option value="pending" onClick={updateStatus(instReports._id)}>Pending</option>
        <option value="resolved"onClick={updateStatus(instReports._id)}>Resolved</option>
        
      </select>
              <div id="log"></div>
              
              
            </tr>
          ))}
        </tbody>
        </div>
        </Table>
        
       </TabPanel>
      
      </Tabs>
    </div>
    </div>
 
    </div>
  );      
 
}
 
export default ViewReports;