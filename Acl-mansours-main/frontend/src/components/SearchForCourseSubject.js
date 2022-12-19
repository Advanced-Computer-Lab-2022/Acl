import { useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";
import Table from "./Table";

function SearchForCourseSubject() {
    const [query, setQuery] = useState("");
    const [query2, setQuery2] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`/indiviualtrainee/filtercoursesbysubjects?q=${query}&q2=${query2}`);
      setData(data.data);
    };
     fetchData();
  }, [query,query2]);
  

  return (
    <div className="app">
        <input
          className="search"
          placeholder="Subject..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
          <input
          className="search"
          placeholder="rating"
          onChange={(e) => setQuery2(e.target.value.toLowerCase())}
          />
    {<Table data={data} />}
        </div>
      );
    }
  
  export default SearchForCourseSubject;