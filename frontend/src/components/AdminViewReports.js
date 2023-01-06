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
import axios from 'axios';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { DataGrid } from '@mui/x-data-grid';

function ViewReports() {
  
    const [reports,   setReports  ]= useState(null)//individualtrainee
    const [instReports, setInstReports]= useState(null)//onstructor
    const [cReports, setCReports]= useState(null)//corporate
    const [stat, setstat]= useState(["Unseen","Pending","Resolved"])//corporate

    const {id} = useParams();
    //const {id1} = useParams();
    const [id1, setid1] = useState('');

    const [st, setSt] = useState('');

    const handleChange = (event) => {
      setSt(event.target.value);
      //updateStatus(id1);

    }
    const updateStatus = async (id1) => {
      
        console.log(st)
         await axios.post(`/admin/upS/${id1}`, {
          status: st,

          
        }).then((response) => {
          console.log(response);

        }, (error) => {
          console.log(error);
        });
        
    };
    const updateStatusCRep = async (id1) => {
      
      console.log(st)
       await axios.post(`/admin/upS/${id1}`, {
        status: st,

        
      }).then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
      
  };
  const updateStatusIns = async (id1) => {
      
    console.log(st)
     await axios.post(`/admin/upS/${id1}`, {
      status: st,

      
    }).then((response) => {
      console.log(response);

    }, (error) => {
      console.log(error);
    });
    
};
  useEffect(() => {
    //individual trainee
    const fetchReports=async ()=> {
      const v=id
      const response =await fetch(`/admin/getindividualreports/${id}`,{
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
      const response =await fetch(`/admin/getcorporatereports/${id}`,{
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
          const response =await fetch(`/admin/getinstructorreports/${id}`,{
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
        {cReports && cReports.map((cReport) => (
            <tr>
              <td></td>
              <td >{cReport._id}</td>
              <td >{cReport.name}</td>
              <td>{cReport.course}</td>
              <td >{cReport.type}</td>
              <td>{cReport.corporatetrainee}</td>
              <td >{cReport.Description}</td>
              {/* <td >{cReports.followups}</td> */}
              <td >{cReport.status}</td>
              <select style={{color:"black"}} id={id1} name="status" value={stat} 
              onClick={updateStatusCRep(cReport._id)} onChange={handleChange}>
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
        {reports && reports.map((report) => (
            <tr>
            <td></td>
            <td >{report._id}</td>
            <td >{report.name}</td>
            <td>{report.course}</td>
            <td >{report.type}</td>
            <td>{report.individualtrainee}</td>
            <td >{report.Description}</td>
            {/* <td >{reports.followups}</td> */}

             <td>{report.status}</td>
            
             <select style={{color:"black"}} id={report._id} name="status"  onClick={updateStatus(report._id)} onChange={handleChange}>
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
             <option value="unseen" onClick={updateStatusIns(instReports._id)}>Unseen</option>
        <option value="pending" onClick={updateStatusIns(instReports._id)}>Pending</option>
        <option value="resolved"onClick={updateStatusIns(instReports._id)}>Resolved</option>
        
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