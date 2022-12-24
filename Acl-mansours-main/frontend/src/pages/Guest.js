import InstructorList from "../components/List";
import SearchForCourse from "../components/SearchForCourse";
const List = () => {
    return (
      <div className="list">
        <h2>List</h2>
        <InstructorList/>
        <SearchForCourse/>
      </div>
    );
  };
  
  export default List;