import { useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";
import Table from "./Table";
import "bootstrap";
import CardMarco from "./CardMarco";
import SearchCard from "./SearchCard";
function SearchForCourse() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `/corporatetrainee/findCoursesBasedOn?q=${query}`
      );
      setData(data.data);
    };
    if (query.length > 0) fetchData();
    else {
      setData([]);
    }
  }, [query]);

  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <div>
        {data &&
          data.map((course) => {
            if (course != "") {
              return <SearchCard key={course._id} course={course} />;
            }
          })}
      </div>
    </div>
  );
}

export default SearchForCourse;
