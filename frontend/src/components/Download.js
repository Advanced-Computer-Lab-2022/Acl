import { useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";
import Table from "./Table";

function Download() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`/indiviualtrainee/invoice`);
      setData(data.data);
    };
     fetchData();
  }, []);
  

  return (
    <div className="app">
     <img src={data}></img>
    
        </div>
      );
    }
  
  export default Download;