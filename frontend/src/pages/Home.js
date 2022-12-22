import {useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate=useNavigate();
const onClick1=()=>{
    navigate('/Admin')}
const onClick2=()=>{
    navigate('/Guest')}
const onClick3=()=>{
    navigate('/Instructor')}
const onClick4=()=>{
    navigate('/IndividualTrainee')}
    const onClick5=()=>{
        navigate('/CorporateTrainee')}
    return (
      <div className="home">
        <h2>Home</h2>
        <button onClick={onClick1}>
        Admin   
        </button>
        <button onClick={onClick2}>
        Guest
        </button>
        <button onClick={onClick3}>
        Instructor
        </button>
        <button onClick={onClick4}>
        Individual Trainee
        </button>
        <button onClick={onClick5}>
        Corporate Trainee
        </button>
      </div>
    );
  };
  
  export default Home;