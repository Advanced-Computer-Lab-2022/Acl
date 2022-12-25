import { useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";
<<<<<<< HEAD
import Table from "./Table";
=======
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a

function SearchForCourse() {
    const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
<<<<<<< HEAD
      const data = await axios.get(`/corporatetrainee/findCoursesBasedOn?q=${query}`);
      setData(data.data);
    };
    if ( query.length > 1) fetchData();
  }, [query]);
  
=======
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a

  return (
    <div className="app">
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
<<<<<<< HEAD
          />
    {<Table data={data} />}
        </div>
      );
    }
=======
        />
      {<Table data={data} />}
    </div>
  );

  }
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
  
  export default SearchForCourse;