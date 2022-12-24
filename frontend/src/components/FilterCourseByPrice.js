import { useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";
import Table from "./Table";

function SearchForCourseInst() {
    const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`/instructor/findCoursesBasedOn?q=${query}`);
      setData(data.data);
    };
    if ( query.length > 1) fetchData();
  }, [query]);
  

  return (
    <div className="app">
        <input
          className="search"
          placeholder="min..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
          <input
          className="search"
          placeholder="max..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
    {<Table data={data} />}
        </div>
      );
    }
  
  export default SearchForCourseInst;