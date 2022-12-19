import { useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";
import Table from "./Table";
import{useParams} from 'react-router-dom';
function SearchForHisCourse() {
    const {id} = useParams();
    const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      const data = await axios.get(`/instructor/SearchHisCourse/${id}?q=${query}`);
      setData(data.data);
    };
    if ( query.length > 1) fetchData();
  }, [query]);
  

  return (
    <div className="app">
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
    {<Table data={data} />}
        </div>
      );
    }
  
  export default SearchForHisCourse;