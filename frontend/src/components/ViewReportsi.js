import axios from "axios";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import React from 'react';
import { EditOutlined, QuestionCircleOutlined , PercentageOutlined ,PlusCircleOutlined  } from '@ant-design/icons';
import { Avatar, Card,Row,Col } from 'antd';
import { useEffect } from "react";
import Navbar from "../components/Navbarri"; 
const { Meta } = Card;
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const { useState, Component } = require("react");

const ViewReports = () => {
 const navigate=useNavigate();
  const {id} = useParams();
  
  const [reports, setReports] = useState([]);

  useEffect(() => {
  const getReports = async (req, res) => {
    
    await axios
      .get(`http://localhost:7007/instructor/viewreports/${id}`)
      .then((res) => {
        const reports = res.data;
        console.log(reports);
        setReports(reports);
      });
  };
  getReports()
    
  }, [])
  return (
    // visualize authors in a table map over authors
    <div>
      <Navbar/>
      <div className="inss1">
    <div className="site-card-wrapper">

<Row gutter={16}>
      
            {reports.map((report) => (
              <Col span={8}>
              <Card 
              style={{
                width: 300,
              }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions ={[
                <a href={`/Followupsi/${id}?reportId=${report._id}`}><PlusCircleOutlined   key="followup" title='Followup Report'/></a>,
                
              ]}
              
            >
             
              <Meta
               title={"Type: "+report.type}
                avatar={"Title: "+report.name}
                description={"Status: "+report.status}
                

              
            
                // onClick={() =>
                //   (window.location.href = `./${trainee._id}/${course._id}`)
                // }
                // key={course._id}
                />
              </Card>
               </Col>
            ))}
          
          </Row>
     
    </div>
    </div>
    </div>
  );
};
export default ViewReports;