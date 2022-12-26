//import Viewallco from "../components/Viewallco";
import ViewaCoursess from "../components/ViewaCoursess";

const ViewC =()=> {
    const [courses, setCourse]= useState([])
    const getCourses =  async () => {
        await axios.get(`http://localhost:7007/courses/getCourses?cId=${req.query.cId}`)
        .then((res) => { 
          console.log(res)
  
                  const courses = res.data
                  console.log(courses)
                  setCourse(courses)
              })
      };
    return(
        <div className="courses">
        <h2> Courses</h2>
        <ViewaCoursess key={req.query.cId} course={getCourses}/>
        </div>
    );
};
export default ViewC