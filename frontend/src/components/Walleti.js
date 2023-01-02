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
import Navbar from "./Navbarri"; 
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

const ViewWallet = () => {
 const navigate=useNavigate();
  const {id} = useParams();
  
  const [wallet, setWallet] = useState(0);

  useEffect(() => {
  const getWallet = async (req, res) => {
    
    await axios
      .get(`http://localhost:7007/instructor/viewmywallet/${id}`)
      .then((res) => {
        const wallet = res.data;
        console.log(wallet);
        setWallet(wallet);
      });
  };
  getWallet()
    
  }, [])
  return (
    // visualize authors in a table map over authors
    <div>
      <Navbar/>
      <div className="inss1">
    <div className="site-card-wrapper">
<Row gutter={16}>
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
             
              
            >
             
              <Meta

                title={"Money: "+wallet}
                

              
            
                // onClick={() =>
                //   (window.location.href = `./${trainee._id}/${course._id}`)
                // }
                // key={course._id}
                />
              </Card>
               </Col>
           
          </Row>
     
    </div>
    </div>
    </div>
  );
};
export default ViewWallet;